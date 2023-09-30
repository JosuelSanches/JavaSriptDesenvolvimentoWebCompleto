import './Nav.css'
import React from 'react'

export default props => 
    <aside className="menu-area">
        <nav className='menu'>
            {/*Refatorar depois para ter o mesmo esquema usado no Header */}
            <a href='#/'>
                <i className='fa fa-home'></i>Início
            </a>
            <a href='#/users'>
                <i className='fa fa-users'></i>Usuarios
            </a>
        </nav>
    </aside>