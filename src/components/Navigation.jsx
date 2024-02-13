import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
    <NavLink  to="/contacts">
      Contacts
    </NavLink>
    <NavLink  to="/login">
      Login
    </NavLink>
    <NavLink to="/register">
      Register
    </NavLink>
  </nav>

  )
}

export default Navigation