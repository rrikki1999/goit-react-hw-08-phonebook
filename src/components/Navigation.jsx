import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthIsLoggedIn } from '../redux/selectors';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
    const isLoggedIn = useSelector(selectAuthIsLoggedIn);
    return (
        <nav className={styles.nav}>
            {isLoggedIn ? (
                <>
                    <NavLink to="/contacts" className={`${styles.navLinkclass} ${styles.loggedIn}`}  
                    >Contacts</NavLink>
                </>
            ) : (
                <>
                    <NavLink to="/login" className={styles.navLinkclass}  >Login</NavLink>
                    <NavLink to="/register" className={styles.navLinkclass}  >Register</NavLink>
                </>
            )}
        </nav>
    );
};

export default Navigation;
