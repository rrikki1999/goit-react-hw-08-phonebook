import React from 'react';
import { useSelector } from 'react-redux'; 

import ContactForm from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

const Contacts = () => {
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
