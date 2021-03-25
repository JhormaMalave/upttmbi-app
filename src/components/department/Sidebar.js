import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import { startLogout } from "../../store/actions/auth";


const Sidebar = React.memo(() => {
  const [collapseShow, setCollapseShow] = useState("hidden");

  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(startLogout());
  }

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
</svg>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            Dep. Informática
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              {/*<NotificationDropdown />*/}
            </li>
            <li className="inline-block relative">
              {/*<UserDropdown/ > /*/}
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Dep. Informática
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className="text-indigo-500 hover:text-indigo-600 text-xs uppercase py-3 font-bold block"
                  to="/department/home"
                >
                  <i className="fas fa-tv opacity-75 mr-2 text-sm"></i> Inicio
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
                  to="/"
                >
                  <i className="fas fa-newspaper text-gray-500 mr-2 text-sm"></i> Información
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
                  to="/"
                >
                  <i className="fas fa-user-circle text-gray-500 mr-2 text-sm"></i> Configuración
                </Link>
              </li>
              <li className="items-center">
                <button
                  className="text-red-500 hover:text-red-600 text-xs uppercase py-3 font-bold block"
                  onClick={handleLogout}
                >
                  <i className="fas fa-user-circle text-gray-500 mr-2 text-sm"></i> Cerrar Sesión
                </button>
              </li>
            </ul>
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <div>
              <NavLink
                activeClassName="text-red-400"
                className="text-gray-800 hover:text-gray-600 text-sm uppercase block mb-2 no-underline font-semibold"
                to="/department/periods"
              >
                <i className="fas fa-paint-brush text-gray-500 text-base"></i> Periodo
              </NavLink>
            </div>
            <div>
              <NavLink
                activeClassName="text-red-400"
                className="text-gray-800 hover:text-gray-600 text-sm uppercase block mb-2 no-underline font-semibold"
                to="/department/subjects"
              >
                <i className="fas fa-paint-brush text-gray-500 text-base"></i> U. Curriculares
              </NavLink>
            </div>
            <div>
              <NavLink
                activeClassName="text-red-400"
                className="text-gray-800 hover:text-gray-600 text-sm uppercase block mb-2 no-underline font-semibold"
                to="/department/sections"
              >
                <i className="fas fa-paint-brush text-gray-500 text-base"></i> Secciones
              </NavLink>
            </div>
            <div>
              <NavLink
                activeClassName="text-red-400"
                className="text-gray-800 hover:text-gray-600 text-sm uppercase block mb-4 no-underline font-semibold"
                to="/department/teachers"
              >
                <i className="fas fa-paint-brush text-gray-500 text-base"></i> Docentes
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
});

export default Sidebar;