import React from 'react';
import { Link } from 'react-router-dom';

const PeriodsOptions = () => {
  return (
    <div className="container mt-4 mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Link to="/department/periods/new" className="card m-2 cursor-pointer bg-white border rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
        <div className="m-3">
          <h2 className="text-lg mb-2">Agregar
         <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">+</span></h2>
        <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">Debes agregar un periodo universitario antes de utilizarlo.</p>
        </div>
      </Link>
      <div className="card m-2 cursor-pointer bg-white border rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
        <div className="m-3">
          <h2 className="text-lg mb-2">Activos
         <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">+</span></h2>
        <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">Listado de períodos que se encuentran activos.</p>
        </div>
      </div>
      <div className="card m-2 cursor-pointer bg-white border rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
        <div className="m-3">
          <h2 className="text-lg mb-2">Inactivos
         <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">+</span></h2>
        <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">Listado de períodos que se encuentran incativos.</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default PeriodsOptions
/*
    <div className="bg-white p-1 m-5 rounded-lg">
    <table className="border-collapse w-full">
      <thead className="border border-gray-300">
				<tr>
					<th className="p-3 font-bold uppercase text-gray-600 hidden lg:table-cell">Periodo</th>
          <th className="p-3 font-bold uppercase text-gray-600 hidden lg:table-cell">Creado</th>
          <th className="p-3 font-bold uppercase text-gray-600 hidden lg:table-cell">Finalizado</th>
					<th className="p-3 font-bold uppercase text-gray-600 hidden lg:table-cell">Estado</th>
          <th className="p-3 font-bold uppercase text-gray-600 hidden lg:table-cell">Acciones</th>
				</tr>
      </thead>
      <tbody> 
        <PeriodsTr />
        <PeriodsTr />
      </tbody>
    </table>
    </div>
    */