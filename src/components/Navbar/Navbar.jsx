import React from 'react'
import css from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={css.nav}>
            <ul>
                <li><NavLink to="/Profile" activeClassName={css.active}>Profile</NavLink></li>
                <li><NavLink to="/Dialogs" activeClassName={css.active}>Dialogs</NavLink></li>
                <li><NavLink to="/News" activeClassName={css.active}>News</NavLink></li>
                <li><NavLink to="/Settings" activeClassName={css.active}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar
