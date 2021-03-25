import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../../hooks/useForm';

const TeachersFilter = () => {
  const history = useHistory();
  const location = history.location.search;

  const urlParams = location ? queryString.parse(location) : ''; 

  const [showHiddeFilter, setShowHiddeFilter] = useState(false);

  const [nameOrId, setNameOrId] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = filterForm();
    console.log(params)
  }

  const filterForm = () => {
    const params = [];
    if (name.trim().length > 3){
      params.push(`name=${name}`);
    }
    if (!!typeIdentities.find((typeIdentity) => typeIdentity === typeIdentity.id)) {
      params.push(`id_type_id=${id_type_id}`);
    }
    if (id_number > 0) {
      params.push(`id_number=${id_number}`);
    }
    if (!!teacherCategories.find(
      (teacher_category) => teacher_category_id === teacher_category.id)
    ) {
      params.push(`teacher_category_id=${teacher_category_id}`)
    }
    if (status === 'true' || status === 'false') {
      params.push(`status=${status}`);
    }
    return params.join('&');
  }

  const teacherCategories = [
    {id: '1', name: 'No definido'},
    {id: '2', name: 'Instructor'},
    {id: '3', name: 'Asistente'},
    {id: '4', name: 'Agregado'},
    {id: '5', name: 'Asociado'},
    {id: '6', name: 'Titular'}
  ];

  const typeIdentities = [
    {id: '1', name: 'V'},
    {id: '2', name: 'P'},
  ];

  const initialForm = {
    name: '',
    id_type_id: 1,
    id_number: '',
    teacher_category_id: '',
    status: '',
    ...urlParams,
  }

  const {form, handleInputChange} = useForm(initialForm);

  const {name, id_type_id, id_number, teacher_category_id, status} = form;

  return (
    <div className="bg-white p-5 m-2 mt-5 rounded-lg ">
      <form onSubmit={handleSubmit}>
        <p className="text-xs ">Buscar por
          <span
            className="text-indigo-600 hover:text-indigo-400 transition-all duration-200 cursor-pointer"
            onClick={() => {setNameOrId(!nameOrId)}}
          > { !nameOrId ? 'nombres' : 'identificación' }</span>
        </p>
        <div className="flex flex-col my-2">
          <div className="-mx-3 md:flex mb-6">
            {
              nameOrId ?
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="name">Nombres</label>
                  <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    id="name"
                    value={name}
                    name="name"
                    type="text"
                    onChange={handleInputChange}
                  />
                </div>
              :
                <>
                  <div className="md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="state">
                      Tipo identidad
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border bg-white rounded px-3 py-2 outline-none border-gray-300 placeholder-gray-500 text-gray-900"
                        id="id_type_id"
                        value={id_type_id}
                        name="id_type_id"
                        onChange={handleInputChange}
                      >
                        {
                          typeIdentities.map(({id, name}) => (
                            <option key={id} value={id}>{ name }</option>
                          ))
                        }
                      </select>
                    </div>
                  </div>
                  <div className="md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="name">
                    Numero de identificación
                    </label>
                    <input
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      id="id_number"
                      value={id_number}
                      name="id_number"
                      type="number"
                      onChange={handleInputChange}
                      
                    />
                  </div>
                </>
            }
          </div>
          {
            showHiddeFilter &&
              <>
                
                <div className="-mx-3 md:flex mb-6">
                  <div className="md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                      htmlFor="teacher_category"
                    >
                      Categoría
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border bg-white rounded px-3 py-2 outline-none border-gray-300 placeholder-gray-500 text-gray-900"
                        id="teacher_category_id"
                        name="teacher_category_id"
                        value={teacher_category_id}
                        onChange={handleInputChange}
                      >
                        {
                          teacherCategories.map(({id, name}) => (
                            <option key={id} value={id}>{ name }</option>
                          ))
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
                        id="status"
                        value={status}
                        name="status"
                        onChange={handleInputChange}
                      >
                        <option>No definido</option>
                        <option value="true">Activo</option>
                        <option value="false">Inactivo</option>
                      </select>
                    </div>
                  </div>
                </div>
              </>
          }
          <div className="flex justify-end items-center">
            <p
              className="cursor-pointer mr-2  text-sm text-gray-700 hover:text-gray-900 transition-all duration-200"
              onClick={() => {setShowHiddeFilter(!showHiddeFilter)}}
            >
              { showHiddeFilter ? 'Ocultar busqueda' :  'Busqueda avanzada' }
            </p>
            <button
              type="submit"
              className="group relative w-40 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Buscar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TeachersFilter;
