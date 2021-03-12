import React from 'react';
import PropTypes from 'prop-types';
import { useHistory} from 'react-router-dom';


const PeriodsOptions = React.memo(({state, showHiddeForm}) => {
  const history = useHistory();

  const handleSelectOption = (option) => {
    if (option === state) {
      history.push('?');
    } else {
      history.push(`?state=${option}`);
    }    
  }

  return (
    <div className="container mt-4 mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <button
        onClick={() => {showHiddeForm(state => !state)}}
        className="card m-2 cursor-pointer bg-green-200 border rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200"
      >
        <div className="m-3">
          <h2 className="text-lg mb-2">Agregar
         <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">+</span></h2>
        <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">Debes agregar un periodo universitario antes de utilizarlo.</p>
        </div>
      </button>
      <div 
        className={`card m-2 cursor-pointer bg-white border rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200
        ${ state === 'active' && 'text-green-800'  }
        `}
        onClick={() => {handleSelectOption('active')}}
      >
        <div className="m-3">
          <h2 className="text-lg mb-2">Activos
         <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">+</span></h2>
        <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">Listado de períodos que se encuentran activos.</p>
        </div>
      </div>
      
      <div
        className={`card m-2 cursor-pointer bg-white border rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200
        ${ state === 'inactive' && 'text-yellow-600'  }
        `}
        onClick={() => {handleSelectOption('inactive')}}
      >
        <div className="m-3">
          <h2 className="text-lg mb-2">Inactivos
         <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">+</span></h2>
        <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">Listado de períodos que se encuentran incativos.</p>
        </div>
      </div>
    </div>
  </div>
  );
});

PeriodsOptions.propTypes = {
  state: PropTypes.string,
}

export default PeriodsOptions;