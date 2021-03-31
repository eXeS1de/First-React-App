import React from 'react'
import css from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={css.nav}>
            <ul>
                <li><NavLink to="/profile" activeClassName={css.active}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={css.active}>Dialogs</NavLink></li>
                <li><NavLink to="/users" activeClassName={css.active}>Users</NavLink></li>
                <li><NavLink to="/news" activeClassName={css.active}>News</NavLink></li>
                <li><NavLink to="/settings" activeClassName={css.active}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar
