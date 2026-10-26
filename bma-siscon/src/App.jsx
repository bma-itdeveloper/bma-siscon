import { useState } from 'react';
import './App.css';
import LoginPage from './features/auth/pages/LoginPage';
import HomePage from './features/dashboard/pages/HomePage';

const initialForm = {
  username: '',
  password: '',
  rememberUser: false,
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;

    setLoginForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleExit = () => {
    setLoginForm(initialForm);
  };

  const handleForgotPassword = () => {
    window.alert('Recuperación de contraseña pendiente de configuración.');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return <HomePage onLogout={handleLogout} />;
  }

  return (
    <LoginPage
      formData={loginForm}
      onChange={handleChange}
      onLogin={handleLogin}
      onExit={handleExit}
      onForgotPassword={handleForgotPassword}
    />
  );
}

export default App;
