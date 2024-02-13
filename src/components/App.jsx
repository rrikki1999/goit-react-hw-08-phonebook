import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { fetchContacts } from '../redux/operations';

import ContactForm from './ContactForm';
import Register from './Register';
import LoginPage from './LoginPage';
import Contacts from './Contacts';
import NotFound from './NotFound';
import UserMenu from './UserMenu';
import Navigation from './Navigation';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>

      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>

      <h1>Phonebook</h1>
      <Navigation/>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading ? <p>Loading...</p> : <Filter />}
      <ContactList />
      <UserMenu/>
    </div>
  );
};
