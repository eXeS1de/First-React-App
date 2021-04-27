import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css'

const Header = (props) => {
    return (
        <header className={css.header}>
            <img src='https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg' alt='logo' />
            <div className={css.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header