import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthIsLoggedIn } from '../redux/selectors';

const Navigation = () => {
    const isLoggedIn = useSelector(selectAuthIsLoggedIn);
    return (
        <nav>
            {isLoggedIn ? (
                <>
                    <NavLink to="/contacts">Contacts</NavLink>
                </>
            ) : (
                <>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                </>
            )}
        </nav>
    );
};

export default Navigation;
