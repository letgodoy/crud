import './Logo.css'
import React from 'react'
import logo from '../../assets/imgs/Logo.jpeg'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo" />
        </Link>
    </aside>