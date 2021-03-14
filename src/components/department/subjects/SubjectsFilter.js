import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import queryString from 'query-string';

const SubjectsFilter = () => {
  const history = useHistory();
  const location = history.location.search;

  const urlParams = location ? queryString.parse(location) : ''; 

  const [showHiddeFilter, setShowHiddeFilter] = useState(false);

  const curricularUnitTypes = [{id: '1', name: 'Taller'}, {id: '2', name: 'Curso'}];

  const courses = [
    {id: '1', name: 0},
    {id: '2', name: 1},
    {id: '3', name: 2},
    {id: '4', name: 3},
    {id: '5', name: 4}
  ]

  const initialForm = {
    name: '',
    value: 0,
    course_id: '',
    curricular_unit_type_id: '',
    state: '',
    ...urlParams,
  }
  
  if (urlParams) {
    
  }

  const {form, handleInputChange} = useForm(initialForm);
  
  const {name, value, course_id, curricular_unit_type_id, state} = form;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const params = filterForm();
    if (params) {
      history.push(`?${params}`)
    }else{
      history.push(`?`)
    }
  }

  const filterForm = () => {
    const params = [];
    if (name.trim().length > 3){
      params.push(`name=${name}`);
    }
    if (value > 0) {
      params.push(`value=${value}`);
    }
    if (!!courses.find((course) => course_id === course.id)) {
      params.push(`course_id=${course_id}`);
    }
    if (!!curricularUnitTypes.find(
      (curricular_unit_type) => curricular_unit_type_id === curricular_unit_type.id)
    ) {
      params.push(`curricular_unit_type_id=${curricular_unit_type_id}`)
    }
    if (state === 'true' || state === 'false') {
      params.push(`state=${state}`);
    }
    return params.join('&');
  }

  
  return (
    <div className="bg-white p-5 m-2 mt-5 rounded-lg ">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col my-2">
          <div className="-mx-3 md:flex mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="name">
                Nombre
              </label>
              <input
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="name"
                onChange={handleInputChange}
                name="name"
                value={name}
                type="text" />
            </div>
          </div>
          {
            showHiddeFilter &&
              <>
                <div className="-mx-3 md:flex mb-6">
                  <div className="md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="name">
                    UCs
                    </label>
                    <input
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      id="value"
                      value={value}
                      name="value"
                      type="number"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="state">
                      Trayecto
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border bg-white rounded px-3 py-2 outline-none border-gray-300 placeholder-gray-500 text-gray-900"
                        id="course_id"
                        value={course_id}
                        name="course_id"
                        onChange={handleInputChange}
                      >
                        <option>No definido</option>
                        {
                          courses.map(({id, name}) => (
                            <option key={id} value={id}>{name !== 0 ? name : 'Inicial'}</option>
                          ))
                        }
                      </select>
                    </div>
                  </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                      htmlFor="curricular_unit_type_id"
                    >
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
                        <option>No definido</option>
                        {
                          curricularUnitTypes.map(({id, name}) => (
                            <option key={id} value={id}>{name}</option>
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
                        id="state"
                        name="state"
                        value={state}
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
  )
}

export default SubjectsFilter
