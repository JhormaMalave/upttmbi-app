import React from 'react';
import { useDispatch } from 'react-redux';

import { useForm } from '../../../hooks/useForm';
import { startNewSchoolPeriod } from '../../../store/actions/periods';
import { setAlert } from '../../../store/actions/ui';

const PeriodsForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      //return 0;
    }

    const params = {
      start_date: startDate,
      end_date: endDate,
      name,
      state,
    }

    dispatch(startNewSchoolPeriod(params));
  }

  const {form, handleInputChange} = useForm({
    startDate: new Date().toISOString().slice(0, 10),
    endDate: '2021-06-09',
    name: '1',
    state: 'true'
  });

  const {startDate, endDate, name, state} = form

  const validateForm = () => {
    if(name !== '1' || name !== '2' || name !== '3'){
      dispatch(setAlert('error', 'Debes seleccionar el corte trimestral'));
      return false;
    }
    return true;
  }

  return (
    <div className="bg-white p-5 m-2 mt-5 rounded-lg ">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col my-2">
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="startDate">
                Fecha de inicio
              </label>
              <input
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="startDate"
                name="startDate"
                value={startDate}
                onChange={handleInputChange}
                type="date" />
            </div>
            <div className="md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="endDate">
                Fecha de culminación
              </label>
              <input 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="endDate"
                name="endDate"
                value={endDate}
                onChange={handleInputChange}
                type="date"
              />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="name">
                Corte trimestral
              </label>
              <div className="relative">
                <select
                  className="w-full border bg-white rounded px-3 py-2 outline-none border-gray-300 placeholder-gray-500 text-gray-900"
                  id="name"
                  value={name}
                  name="name"
                  onChange={handleInputChange}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>
            <div className="md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="state">
                Estado
              </label>
              <div className="relative">
                <select
                  className="w-full border bg-white rounded px-3 py-2 outline-none border-gray-300 placeholder-gray-500 text-gray-900"
                  id="state"
                  name="state"
                  value={state}
                  onChange={handleInputChange}
                >
                  <option value="true">Activo</option>
                  <option value="false">Inactivo</option>
                </select>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="group relative w-40 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg className="h-5 w-5 text-green-500 group-hover:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
}

export default PeriodsForm;
