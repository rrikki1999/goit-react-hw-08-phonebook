import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 

import ContactForm from '../components/ContactForm';
import { ContactList } from '../components/ContactList';
import { Filter } from '../components/Filter';
import { apiGetContacts } from '../redux/contactsSlice';

const Contacts = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(apiGetContacts())
    },[dispatch])
    
    const isLoading = useSelector(state => state.contacts.isLoading);
    return (
        <>
            <ContactForm />
            {isLoading ? <p>Loading...</p> : <Filter />}
            <ContactList />
        </>
    );
};

export default Contacts;
