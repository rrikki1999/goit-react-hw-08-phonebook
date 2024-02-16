import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectAuthIsLoggedIn } from '../redux/selectors';
import { apiRefreshUser } from '../redux/auth/authSlice';

import { Loader } from './Loader';
import PrivateRoute from './PrivateRoute';
import styles from '../styles/Loader.module.css';
import RestrictedRoute from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const Register = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const Contacts = lazy(() => import('../pages/Contacts'));
const NotFound = lazy(() => import('../pages/NotFound'));
const UserMenu = lazy(() => import('./UserMenu'));
const Navigation = lazy(() => import('./Navigation'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  return (
    <div>
      <Suspense fallback={<Loader className={styles.loader} />}>
        <Navigation />
        {isLoggedIn && <UserMenu />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <Register />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
