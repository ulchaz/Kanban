// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './routes';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import MainPage from './pages/MainPage/MainPage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CardPage from './pages/CardPage/CardPage';
import ExitPage from './pages/ExitPage/ExitPage';
import NotFound from './pages/NotFound/NotFound';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        {/* Публичные маршруты */}
        <Route path={ROUTES.LOGIN} element={<Login setIsAuth={setIsAuth} />} />
        <Route path={ROUTES.REGISTER} element={<Register setIsAuth={setIsAuth} />} />
        
        {/* Защищенные маршруты */}
        <Route
          path={ROUTES.MAIN}
          element={
            <ProtectedRoute isAuth={isAuth}>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.CARD}
          element={
            <ProtectedRoute isAuth={isAuth}>
              <CardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.EXIT}
          element={
            <ProtectedRoute isAuth={isAuth}>
              <ExitPage setIsAuth={setIsAuth} />
            </ProtectedRoute>
          }
        />
        
        {/* 404 */}
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;