import React from 'react';

import '../../styles/layout/navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <a href="/">Configuración</a>
                <button className="primary-button">Salir</button>
            </nav>
        </div>
    );
}

export default Navbar;