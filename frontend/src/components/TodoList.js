import React, { useCallback, useEffect, useState } from "react";
import { Check, Trash2, Plus } from "lucide-react";
import apiClient from "../utils/axiosConfig";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadTodos = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await apiClient.get("/api/todos");
      setTodos(data);
      setError("");
    } catch {
      setError("Could not load your tasks.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadTodos(); }, [loadTodos]);

  const addTodo = async () => {
    if (!newTask.trim()) return;
    try {
      const { data } = await apiClient.post("/api/todos", { text: newTask.trim(), done: false });
      setTodos((current) => [data, ...current]);
      setNewTask("");
    } catch { setError("Could not add the task."); }
  };

  const toggleDone = async (todo) => {
    try {
      const { data } = await apiClient.put(`/api/todos/${todo.id}`, { text: todo.text, done: !todo.done });
      setTodos((current) => current.map((item) => item.id === data.id ? data : item));
    } catch { setError("Could not update the task."); }
  };

  const deleteTodo = async (id) => {
    try {
      await apiClient.delete(`/api/todos/${id}`);
      setTodos((current) => current.filter((item) => item.id !== id));
    } catch { setError("Could not delete the task."); }
  };

  const completedCount = todos.filter((todo) => todo.done).length;
  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-gray-900">
      <div className="flex items-center justify-between bg-gradient-to-r from-indigo-600 to-blue-500 p-6 text-white">
        <div><h3 className="text-2xl font-bold">To-do list</h3><p className="text-indigo-100">Your private study tasks</p></div>
        <p className="font-bold">{completedCount}/{todos.length}</p>
      </div>
      <div className="flex gap-3 border-b p-6 dark:border-gray-700">
        <input aria-label="New task" value={newTask} onChange={(event) => setNewTask(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && addTodo()} placeholder="Add a new task"
          className="flex-1 rounded-xl border px-4 py-3 dark:bg-gray-800" />
        <button onClick={addTodo} className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 text-white"><Plus size={18} /> Add</button>
      </div>
      <div className="space-y-3 p-6">
        {loading && <p>Loading tasks…</p>}
        {error && <p role="alert" className="text-red-600">{error}</p>}
        {!loading && todos.length === 0 && <p className="text-gray-500">No tasks yet.</p>}
        {todos.map((todo) => (
          <div key={todo.id} className="flex items-center justify-between rounded-xl border p-4 dark:border-gray-700">
            <button onClick={() => toggleDone(todo)} className="flex items-center gap-3 text-left">
              <span className={`flex h-6 w-6 items-center justify-center rounded-full border ${todo.done ? "bg-green-500 text-white" : ""}`}>{todo.done && <Check size={14} />}</span>
              <span className={todo.done ? "line-through text-gray-500" : ""}>{todo.text}</span>
            </button>
            <button aria-label={`Delete ${todo.text}`} onClick={() => deleteTodo(todo.id)} className="text-red-600"><Trash2 size={18} /></button>
          </div>
        ))}
      </div>
    </section>
  );
}
