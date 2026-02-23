// src/components/ProtectedRoute/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuth, children }) {
  console.log('ProtectedRoute check:', isAuth); // Добавь для отладки
  
  if (!isAuth) {
    console.log('Not authorized, redirecting to login');
    return <Navigate to="/login" replace />;
  }
  
  console.log('Authorized, showing protected content');
  return children;
}

export default ProtectedRoute;