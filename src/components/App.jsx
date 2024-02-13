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

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectAuthIsLoggedIn); 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      {isLoggedIn && <UserMenu />}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
