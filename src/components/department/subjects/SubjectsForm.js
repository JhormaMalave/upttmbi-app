import React from 'react';
import { useForm } from '../../../hooks/useForm';

const SubjectsForm = ({ subject }) => {

  const initForm = subject ? subject : {
    name: '',
    value: '3',
    curricular_unit_type_id: '1',
    duration: '1',
    state: 'true'
  }
  
  const curricularUnitTypes = [
    {id: 1, name: 'Curso'},
    {id: 2, name: 'Taller'}
  ]

  const durations = [
    {id: 1, name: 'Trimestral'},
    {id: 2, name: 'Semestral'},
    {id: 3, name: 'Anual'},
  ]

  const {form, handleInputChange} = useForm(initForm);
  const {name, value, curricular_unit_type_id, duration, state} = form;
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="bg-white p-5 m-2 mt-5 rounded-lg ">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col my-2">
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="name">
                  Nombre
              </label>
              <input
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={handleInputChange}
              />
              </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="value">
                UCs
              </label>
              <input
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="value"
                name="value"
                type="number"
                value={value}
                onChange={handleInputChange}
              />
            </div>
            <div className="md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="curricular_unit_type_id">
                Tipo
              </label>
              <div className="relative">
                <select
                  className="w-full border bg-white rounded px-3 py-2 outline-none border-gray-300 placeholder-gray-500 text-gray-900"
                  id="curricular_unit_type_id"
                  name="curricular_unit_type_id"
                  value={curricular_unit_type_id}
                  onChange={handleInputChange}
                >
                  {
                    curricularUnitTypes.map(
                      ({id, name}) => <option key={id}>{name}</option>
                    )
                  }
                </select>
              </div>
            </div>
          </div>
          
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="duration">
                Duración
              </label>
              <div className="relative">
                <select
                  className="w-full border bg-white rounded px-3 py-2 outline-none border-gray-300 placeholder-gray-500 text-gray-900"
                  id="duration"
                  name="duration"
                  value={duration}
                  onChange={handleInputChange}
                >
                  {
                    durations.map(
                      ({id, name}) => <option key={id}>{name}</option>
                    )
                  }
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
          <div className="flex justify-end items-center">
            <button
              type="submit"
              className="group relative w-40 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Enviar
            </button>
          </div>
          
        </div>
      </form>
    </div>
  );
}

export default SubjectsForm;
