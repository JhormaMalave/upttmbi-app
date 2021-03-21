import React from 'react';

const SectionsOptions = React.memo(({ showHiddeForm }) => {
  const courses = [
    {id: '1', name: 0},
    {id: '2', name: 1},
    {id: '3', name: 2},
    {id: '4', name: 3},
    {id: '5', name: 4}
  ]

  return (
    <div className="flex flex-row justify-between mx-2 mt-4">
      <div className="relative">
        <select
          className="w-full border bg-white rounded px-3 py-2 outline-none border-gray-300 placeholder-gray-500 text-gray-900"
          id="course_id"
          name="course_id"
        >
          {
            courses.map(({id, name}) => (
              <option key={id} value={id}>Trayecto {name !== 0 ? name : 'Inicial'}</option>
            ))
          }
        </select>
      </div>
      <button
        type="submit"
        className="group relative w-40 flex justify-center py-2 mr-2 px-4 border border-transparent text-sm font-medium rounded-md text-green-500 bg-white hover:bg-green-600 hover:text-white"
      >
        <svg className="w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
        Agregar            
      </button>
    </div>
  );
});

export default SectionsOptions;