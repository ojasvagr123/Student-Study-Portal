import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';
import { ThemeProvider } from "./context/ThemeContext";
import { ToastContainer } from "react-toastify";

const SignupPage = lazy(() => import('./components/SignupPage'));
const LoginPage = lazy(() => import('./components/LoginPage'));
const DashboardPage = lazy(() => import('./components/DashboardPage'));
const ProfilePage = lazy(() => import('./components/ProfilePage'));
const SubjectsPage = lazy(() => import('./components/SubjectsPage'));
const CareerGoalPage = lazy(() => import('./pages/CareerGoalPage'));
const ContributePage = lazy(() => import('./pages/ContributePage'));
const UnitPage = lazy(() => import('./components/UnitPage'));
const Contact = lazy(() => import('./components/Contact'));
const About = lazy(() => import('./components/About'));
const Features = lazy(() => import('./components/Features'));
const QuizPage = lazy(() => import('./components/QuizPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));


function App() {
  return (
    <ThemeProvider>
 
      <Router>
             
  <ToastContainer />
        <Suspense fallback={<div className="min-h-screen grid place-items-center text-indigo-700">Loading Studify…</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/quizzes" element={<QuizPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/goal/:goal" element={
            <ProtectedRoute>
              <CareerGoalPage />
            </ProtectedRoute>
          } />

          <Route path="/subjects/:subjectId/units" element={<ProtectedRoute><UnitPage /></ProtectedRoute>} />

          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } />
          <Route path="/subjects/:semesterId" element={<ProtectedRoute><SubjectsPage /></ProtectedRoute>} />

          <Route path="/contribute" element={<ProtectedRoute><ContributePage /></ProtectedRoute>} />
          <Route path="/admin" element={<AdminRoute><AdminPage /></AdminRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
