import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from '../redux/operations';

import Register from '../pages/Register';
import LoginPage from '../pages/LoginPage';
import Contacts from './Contacts';
import NotFound from '../pages/NotFound';
import UserMenu from './UserMenu';
import Navigation from './Navigation';
import { selectAuthIsLoggedIn } from '../redux/selectors';
import PrivateRoute from './PrivateRoute';
import HomePage from 'pages/HomePage';
// import { apiRefreshUser } from '../redux/auth/authSlice';

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectAuthIsLoggedIn); 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(apiRefreshUser());
  // }, [dispatch]);

  return (
    <div>
      <Navigation />
      {isLoggedIn && <UserMenu />}
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<PrivateRoute><Contacts /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
