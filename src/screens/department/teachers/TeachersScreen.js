import React from 'react';
import TeachersTable from '../../../components/department/teachers/TeachersTable';
import SelectStatus from '../../../components/SelectStatus';

const TeachersScreen = () => {
  return (
    <>
      <div className="relative bg-indigo-600 md:pt-20 pb-20 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <h1 className="font-bold text-4xl text-white pb-4">Docentes</h1>
          <h2 className="font-bold text-2xl text-indigo-300">Estado</h2>
          <SelectStatus />
        </div>
      </div>
      {
        <TeachersTable />
      }
    </>
  )
}

export default TeachersScreen;
