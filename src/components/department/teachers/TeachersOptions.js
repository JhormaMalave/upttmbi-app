import React from 'react';

const TeachersOptions = React.memo(() => {

  return (
    <div className="container mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <button
        className="card m-2 cursor-pointer bg-green-200 border rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200"
      >
        <div className="m-3">
          <div className="flex flex-row justify-between">
            <h2 className="text-lg mb-2">Agregar </h2>
            <i class="fas fa-plus-circle text-sm"></i>
          </div>
          <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">Debes agregar una unidad curricular antes de utilizarla.</p>
        </div>
      </button>
      <div 
        className={`card m-2 cursor-pointer bg-white border rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200
        
        `}
      >
        <div className="m-3">
          <div className="flex flex-row justify-between">
            <h2 className="text-lg mb-2">Mostrar </h2>
            <i class="fas fa-list-ul text-sm"></i>
          </div>
        <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">Muestra un listado de los docentes registrados.</p>
        </div>
      </div>
      <div 
        className={`card m-2 cursor-pointer bg-white border rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200
        
        `}
      >
        <div className="m-3">
          <div className="flex flex-row justify-between">
            <h2 className="text-lg mb-2">Docentes Trujillo </h2>
            <i class="far fa-file-excel text-sm"></i>
          </div>
          <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">Reporte de los docentes registrados en el nucleo "Barbarita de la Torre".</p>
        </div>
      </div>
      <div 
        className={`card m-2 cursor-pointer bg-white border rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200
        
        `}
      >
        <div className="m-3">
          <div className="flex flex-row justify-between">
            <h2 className="text-lg mb-2">Caracterización de dep.</h2>
            <i class="far fa-file-excel text-sm"></i>
          </div>
          <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">Reporte de caracterización del dep. de informática.</p>
        </div>
      </div>
      <div 
        className={`card m-2 cursor-pointer bg-white border rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200
        
        `}
      >
        <div className="m-3">
          <div className="flex flex-row justify-between">
            <h2 className="text-lg mb-2">Reporte general</h2>
            <i class="far fa-file-excel text-sm"></i>
          </div>
          <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">Reporte general de los docentes.</p>
        </div>
      </div>
    </div>
  </div>
  );
});

export default TeachersOptions;