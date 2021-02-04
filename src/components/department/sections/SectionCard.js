import React from 'react'
import { Link } from 'react-router-dom';

const SectionCard = () => {
  return (
    <Link className="flex flex-row justify-between items-center bg-white m-2 p-6 rounded-lg w-full sm:w-auto sm:m-4 sm:flex-col" to={`/department/sections/1`}>
      <h3 className="text-xs uppercase font-bold">sección 7</h3>
      <p className="text-gray-400 text-center">Fin de semana</p>
      <p className="text-gray-400 text-center">2020 - 2</p>
    </Link>
  );
}

export default SectionCard
