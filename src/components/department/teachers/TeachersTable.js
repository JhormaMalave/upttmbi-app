import React from 'react';
import TeacherTr from './TeacherTr';

const TeacherList = () => {
  return (
    <div className="bg-white p-1 m-10 rounded-lg">
    <table className="border-collapse w-full">
      <thead>
				<tr>
					<th className="p-3 font-bold uppercase bg-indigo-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Identificación</th>
					<th className="p-3 font-bold uppercase bg-indigo-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Nombre</th>
					<th className="p-3 font-bold uppercase bg-indigo-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Estado</th>
					<th className="p-3 font-bold uppercase bg-indigo-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Acciones</th>
				</tr>
      </thead>
      <tbody>
        <TeacherTr />
        <TeacherTr />
        <TeacherTr />    
      </tbody>
    </table>
    </div>
  );
}

export default TeacherList;
