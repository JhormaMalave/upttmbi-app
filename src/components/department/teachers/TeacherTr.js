import React from 'react';
import { Link } from 'react-router-dom';

const TeacherTr = () => {
  return (
    <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
      <td className="w-full lg:w-auto p-3 text-gray-800 text-center border-b block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Identificación</span>
        V - 27677855
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800 text-center border-b text-center block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Nombre</span>
        Jhorma Oscar Malave Acevedo
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800 text-center border-b text-center block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Estado</span>
        {
          //<span className="rounded bg-red-400 py-1 px-3 text-xs font-bold">Jubilado</span>
          //<span className="rounded bg-yellow-400 py-1 px-3 text-xs font-bold">Reposo</span>
        }
        <span className="rounded bg-green-400 py-1 px-3 text-xs font-bold">Activo</span>
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800 text-center border-b text-center block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Acciones</span>
        <Link className="text-blue-400 hover:text-blue-600 underline" to={`/department/teachers/1`}>
          Ver
        </Link>
        <button className="text-blue-400 hover:text-blue-600 underline pl-3">Editar</button>
        <button className="text-blue-400 hover:text-blue-600 underline pl-3">Eliminar</button>
      </td>
    </tr>
  )
}

export default TeacherTr;