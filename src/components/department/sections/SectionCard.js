import React from 'react'
import { Link } from 'react-router-dom';

const SectionCard = ({name, shift, school_period}) => {

  return (
    <Link className="flex flex-row justify-between items-center bg-white m-2 p-6 rounded-lg w-full sm:w-auto sm:m-4 sm:flex-col" to={`/department/sections/1`}>
      <h3 className="text-xs uppercase font-bold">sección {name}</h3>
      <p className="text-gray-400 text-center">{shift.nombre}</p>
      <p className="text-gray-400 text-center">2020 - {school_period.name}</p>
    </Link>
  );
}

export default SectionCard
