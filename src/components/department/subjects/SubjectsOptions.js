import React from 'react';

const SubjectsOptions = React.memo(() => {

  return (
    <div className="container mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <button
        className="card m-2 cursor-pointer bg-green-200 border rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200"
      >
        <div className="m-3">
          <h2 className="text-lg mb-2">Agregar
          <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">+</span></h2>
          <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">Debes agregar una unidad curricular antes de utilizarla.</p>
        </div>
      </button>
      <div 
        className={`card m-2 cursor-pointer bg-white border rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200
        
        `}
      >
        <div className="m-3">
          <h2 className="text-lg mb-2">Mostrar
         <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">+</span></h2>
        <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">Muestra un listado de asignaturas registradas.</p>
        </div>
      </div>
    </div>
  </div>
  );
});

export default SubjectsOptions;