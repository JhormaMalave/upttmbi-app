import React from 'react';
import {
    NavLink
} from 'react-router-dom';

import '../../styles/layout/sidebar.css'

const SideBar = () => {
    return (
        <div className="sidebar">
            <p className="sidebar__title">Dep. Informática</p>
            <nav className="sidebar__menu">
                <div className="sidebar__options">
                    <p className="sidebar__options-title">Docentes</p>
                    <NavLink className="sidebar__option" to="/">Mostrar</NavLink>
                    <a className="sidebar__option" href="#">Agregar</a>
                    <a className="sidebar__option" href="#">Buscar</a>
                </div>
                <div className="sidebar__options">
                    <p className="sidebar__options-title">Asignaturas</p>
                    <NavLink className="sidebar__option" to="/subjects">Mostrar</NavLink>
                    <a className="sidebar__option" href="#">Agregar</a>
                </div>
                <div className="sidebar__options">
                    <p className="sidebar__options-title">Secciones</p>
                    <NavLink className="sidebar__option" to="/sections">Mostrar</NavLink>
                    <a className="sidebar__option" href="#">Agregar</a>
                </div>
                <div className="sidebar__options">
                    <p className="sidebar__options-title">Cargas Academicas</p>
                    <a className="sidebar__option" href="#">Mostrar</a>
                    <a className="sidebar__option" href="#">Agregar</a>
                </div>
            </nav>
        </div>
    );
}

export default SideBar;