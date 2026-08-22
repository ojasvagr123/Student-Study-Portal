import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../utils/axiosConfig";
import { useAuthStore } from "../stores/authStore";

const tabs = ["overview", "users", "branches", "semesters", "subjects", "units", "resources", "career"];
const empty = { name: "", code: "", semester: 1, branchId: "", subjectId: "", unitId: "", title: "", url: "", type: "NOTE", goal: "GATE" };

export default function AdminPage() {
  const [tab, setTab] = useState("overview");
  const [data, setData] = useState({ stats: {}, users: [], branches: [], semesters: [], subjects: [], units: [], resources: [], career: [] });
  const [form, setForm] = useState(empty);
  const [loading, setLoading] = useState(true);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [stats, users, branches, semesters, subjects, units, resources, career] = await Promise.all([
        api.get("/api/admin/stats"), api.get("/api/admin/users"), api.get("/api/admin/branches"),
        api.get("/api/admin/semesters"), api.get("/api/admin/subjects"), api.get("/api/admin/units"),
        api.get("/api/admin/resources"), api.get("/api/admin/career-resources"),
      ]);
      setData({ stats: stats.data, users: users.data, branches: branches.data, semesters: semesters.data,
        subjects: subjects.data, units: units.data, resources: resources.data, career: career.data });
    } catch (error) { toast.error(error.response?.data?.message || "Unable to load admin data"); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { load(); }, [load]);
  const change = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const action = async (request, success) => {
    try { await request(); toast.success(success); setForm(empty); await load(); }
    catch (error) { toast.error(error.response?.data?.message || "Operation failed"); }
  };
  const remove = (path) => { if (window.confirm("Delete this item? This cannot be undone.")) action(() => api.delete(path), "Deleted"); };

  const submit = (event) => {
    event.preventDefault();
    const endpoints = {
      branches: ["branches", { name: form.name, code: form.code }], semesters: ["semesters", { name: form.name }],
      subjects: ["subjects", { name: form.name, code: form.code, semester: Number(form.semester), branchId: Number(form.branchId) }],
      units: ["units", { name: form.name, subjectId: Number(form.subjectId) }],
      resources: ["resources", { title: form.title, url: form.url, type: form.type, unitId: Number(form.unitId) }],
      career: ["career-resources", { title: form.title, url: form.url, type: form.type, goal: form.goal }],
    };
    const [path, payload] = endpoints[tab];
    action(() => api.post(`/api/admin/${path}`, payload), "Saved");
  };

  const signOut = () => { logout(); navigate("/login"); };
  if (loading) return <div className="grid min-h-screen place-items-center">Loading administration…</div>;

  return <div className="min-h-screen bg-slate-100 text-slate-900">
    <header className="flex flex-wrap items-center justify-between gap-4 bg-slate-950 px-6 py-4 text-white">
      <div><h1 className="text-2xl font-bold">Studify Administration</h1><p className="text-sm text-slate-300">Users and learning-content control centre</p></div>
      <div className="flex gap-3"><button onClick={() => navigate("/dashboard")} className="rounded-lg border border-slate-600 px-4 py-2">Student view</button><button onClick={signOut} className="rounded-lg bg-red-600 px-4 py-2">Sign out</button></div>
    </header>
    <div className="mx-auto grid max-w-7xl gap-6 p-6 lg:grid-cols-[220px_1fr]">
      <nav className="h-fit rounded-2xl bg-white p-3 shadow-sm">{tabs.map((item) => <button key={item} onClick={() => setTab(item)} className={`mb-1 w-full rounded-xl px-4 py-3 text-left capitalize ${tab === item ? "bg-indigo-600 text-white" : "hover:bg-slate-100"}`}>{item}</button>)}</nav>
      <main className="min-w-0 rounded-2xl bg-white p-6 shadow-sm">
        {tab === "overview" && <Overview stats={data.stats} />}
        {tab === "users" && <Users users={data.users} action={action} remove={remove} />}
        {tab !== "overview" && tab !== "users" && <ContentManager tab={tab} data={data} form={form} change={change} submit={submit} remove={remove} />}
      </main>
    </div>
  </div>;
}

function Overview({ stats }) {
  return <><h2 className="mb-6 text-2xl font-bold">System overview</h2><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{Object.entries(stats).map(([key, value]) => <div key={key} className="rounded-2xl border border-slate-200 p-5"><p className="capitalize text-slate-500">{key.replace(/([A-Z])/g, " $1")}</p><p className="mt-2 text-3xl font-bold text-indigo-700">{value}</p></div>)}</div></>;
}

function Users({ users, action, remove }) {
  return <><h2 className="mb-6 text-2xl font-bold">User management</h2><div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead><tr className="border-b"><th className="p-3">User</th><th>Role</th><th>Status</th><th>Actions</th></tr></thead><tbody>{users.map((user) => <tr key={user.id} className="border-b"><td className="p-3"><strong>{user.name}</strong><br/><span className="text-slate-500">{user.email}</span></td><td><select value={user.role} onChange={(e) => action(() => api.put(`/api/admin/users/${user.id}`, { role: e.target.value, active: user.active }), "Role updated")} className="rounded border p-2"><option>STUDENT</option><option>ADMIN</option></select></td><td><button onClick={() => action(() => api.put(`/api/admin/users/${user.id}`, { role: user.role, active: !user.active }), "Status updated")} className={`rounded-full px-3 py-1 ${user.active ? "bg-green-100 text-green-700" : "bg-slate-200"}`}>{user.active ? "Active" : "Disabled"}</button></td><td><button onClick={() => remove(`/api/admin/users/${user.id}`)} className="text-red-600">Delete</button></td></tr>)}</tbody></table></div></>;
}

function ContentManager({ tab, data, form, change, submit, remove }) {
  const items = data[tab] || [];
  return <><h2 className="mb-5 text-2xl font-bold capitalize">Manage {tab}</h2><form onSubmit={submit} className="mb-8 grid gap-3 rounded-xl bg-slate-50 p-4 md:grid-cols-2">
    {(tab === "branches" || tab === "semesters" || tab === "subjects" || tab === "units") && <input required name="name" value={form.name} onChange={change} placeholder="Name" className="rounded-lg border p-3" />}
    {(tab === "branches" || tab === "subjects") && <input required name="code" value={form.code} onChange={change} placeholder="Code" className="rounded-lg border p-3" />}
    {tab === "subjects" && <><input required min="1" max="12" type="number" name="semester" value={form.semester} onChange={change} className="rounded-lg border p-3"/><Select name="branchId" value={form.branchId} change={change} items={data.branches} label="branch" /></>}
    {tab === "units" && <Select name="subjectId" value={form.subjectId} change={change} items={data.subjects} label="subject" />}
    {(tab === "resources" || tab === "career") && <><input required name="title" value={form.title} onChange={change} placeholder="Title" className="rounded-lg border p-3"/><input required type="url" name="url" value={form.url} onChange={change} placeholder="https://…" className="rounded-lg border p-3"/><select name="type" value={form.type} onChange={change} className="rounded-lg border p-3"><option>NOTE</option><option>VIDEO</option><option>BOOK</option></select></>}
    {tab === "resources" && <Select name="unitId" value={form.unitId} change={change} items={data.units} label="unit" />}
    {tab === "career" && <select name="goal" value={form.goal} onChange={change} className="rounded-lg border p-3"><option>GATE</option><option>CAT</option><option>UPSC</option><option>PLACEMENT</option><option>OTHERS</option></select>}
    <button className="rounded-lg bg-indigo-600 p-3 font-semibold text-white md:col-span-2">Add {tab.replace("career", "career resource")}</button>
  </form><div className="space-y-2">{items.map((item) => <div key={item.id} className="flex items-center justify-between rounded-xl border p-4"><div><strong>{item.name || item.title}</strong><p className="text-sm text-slate-500">{item.code || item.url || `ID ${item.id}`}</p></div><button onClick={() => remove(`/api/admin/${tab === "career" ? "career-resources" : tab}/${item.id}`)} className="text-red-600">Delete</button></div>)}{items.length === 0 && <p className="text-slate-500">No records yet.</p>}</div></>;
}

function Select({ name, value, change, items, label }) { return <select required name={name} value={value} onChange={change} className="rounded-lg border p-3"><option value="">Select {label}</option>{items.map((item) => <option key={item.id} value={item.id}>{item.name || item.title}</option>)}</select>; }
