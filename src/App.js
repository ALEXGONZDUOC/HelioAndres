import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider, useAuth } from './context/AuthContext';
import Home from './components/Home';
import AdminLayout from './layouts/AdminLayout';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

// A small component to handle the login logic
const LoginPage = () => {
  const { login } = useAuth();
  return <Login onLogin={login} />;
};

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/admin/*" 
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;