import React from 'react';
import SelectTraject from './SelectTraject';

const Header = ({setTraject}) => {
  return (
    <div className="relative bg-indigo-600 md:pt-20 pb-20 pt-12">
      <div className="px-4 md:px-10 mx-auto w-full">
            <h1 className="font-bold text-4xl text-white pb-4">Asignaturas</h1>
            <h2 className="font-bold text-2xl text-indigo-300">Selecciona un trayecto</h2>
            <SelectTraject setTraject={setTraject} />
      </div>
    </div>
  );
}

export default Header;