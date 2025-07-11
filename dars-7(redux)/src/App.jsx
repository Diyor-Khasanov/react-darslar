// App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import AuthForm from "./pages/authForm"
import ContactForm from "./pages/ContactForm";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthSubmit = (values) => {
    console.log("Login/Signup maʼlumotlari:", values);
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/contact" replace />
            ) : (
              <AuthForm isLogin={true} onSubmit={handleAuthSubmit} />
            )
          }
        />
        <Route
          path="/signup"
          element={<AuthForm isLogin={false} onSubmit={handleAuthSubmit} />}
        />
        <Route
          path="/contact"
          element={
            isAuthenticated ? <ContactForm /> : <Navigate to="/" replace />
          }
        />
        <Route path="*" element={<h2>404 - Sahifa topilmadi</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
