import React from 'react';
import PeriodsOptions from '../../../components/department/periods/PeriodsOptions';

const PeriodsScreen = () => {
  return (
    <div>
      <div className="relative bg-indigo-600 md:pt-20 pb-20 pt-12 m-2 rounded-xl	">
        <div className="px-4 md:px-10 mx-auto w-full">
          <h1 className="font-bold text-4xl text-white pb-4">Periodo universitario</h1>
          <h2 className="font-bold text-2xl text-indigo-300">
            <svg className="w-7 inline mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Debes establecer en periodo escolar universitario con el que deseas trabajar esta sesión. <strong className="text-indigo-200">El periodo universitario se debe crear para cada corte trimestral</strong></h2>
        </div>
      </div>
      <PeriodsOptions />
    </div>
  )
}


export default PeriodsScreen;
