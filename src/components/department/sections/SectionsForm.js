import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../../hooks/useForm';
import { activeSection, startNewSection } from '../../../store/actions/sections';

const SectionsForm = ({section}) => {
  const dispatch = useDispatch();

  // Replace this for API data
  const trimesters = [
    {id: '1', name: 1},
    {id: '2', name: 2},
    {id: '3', name: 3},
  ];

  // Replace this for API data
  const periods = [
    {id: '1', name: '2019-3'},
    {id: '2', name: '2020-1'},
    {id: '3', name: '2020-2'},
  ];

  // Replace this for API data
  const courses = [
    {id: '1', name: 'Inicial'},
    {id: '2', name: '1'},
    {id: '3', name: '2'},
    {id: '4', name: '3'},
    {id: '5', name: '4'},
  ];

  // Replace this for API data
  const shifts = [
    {id: '1', name: 'Mañana'},
    {id: '2', name: 'Tarde'},
    {id: '3', name: 'Fin de semana'},
  ]

  const initForm = section ? section : {
    id: '',
    name: '',
    shift_id: '',
    trimester: '',
    course_id: '',
    school_period_id: '',
  }

  const {form, handleInputChange} = useForm(initForm);

  const {
    name,
    shift_id,
    trimester,
    course_id,
    school_period_id,
  } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startNewSection());
  }

  useEffect(()=>{
    dispatch(activeSection({
      id: form.id || null,
      name: form.name,
      trimester: form.trimester,
      shift: {
        id: form.shift_id || null,
        name: null
      },
      course: {
        id: form.course_id || null,
        name: null,
      },
      school_period: {
        id: form.school_period_id,
        name: null
      }
    }));
  }, [form, dispatch]);

  return (
    <div className="bg-white p-5 m-2 mt-5 rounded-lg ">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col my-2">
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3">
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
            <div className="md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="shift_id">
                Turno
              </label>
              <div className="relative">
                <select
                  className="w-full border bg-white rounded px-3 py-2 outline-none border-gray-300 placeholder-gray-500 text-gray-900"
                  id="shift_id"
                  name="shift_id"
                  value={shift_id}
                  onChange={handleInputChange}
                >
                  {
                    shifts.map(
                      ({id, name}) => <option key={id} value={id}>{name}</option>
                    )
                  }
                </select>
              </div>
            </div>
          </div>
          
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/3 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="course_id">
                Trayecto
              </label>
              <div className="relative">
                <select
                  className="w-full border bg-white rounded px-3 py-2 outline-none border-gray-300 placeholder-gray-500 text-gray-900"
                  id="course_id"
                  name="course_id"
                  value={course_id}
                  onChange={handleInputChange}
                >
                  {
                    courses.map(({id, name}) => (
                      <option key={id} value={id}>{name}</option>
                    ))
                  }
                </select>
              </div>
            </div>
            <div className="md:w-1/3 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="trimester">
                Trimestre
              </label>
              <div className="relative">
                <select
                  className="w-full border bg-white rounded px-3 py-2 outline-none border-gray-300 placeholder-gray-500 text-gray-900"
                  id="trimester"
                  name="trimester"
                  value={trimester}
                  onChange={handleInputChange}
                >
                  {
                    trimesters.map(
                      ({id, name}) => <option key={id} value={id}>{name}</option>
                    )
                  }
                </select>
              </div>
            </div>
            <div className="md:w-1/3 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="school_period_id">
                Periodo
              </label>
              <div className="relative">
                <select
                  className="w-full border bg-white rounded px-3 py-2 outline-none border-gray-300 placeholder-gray-500 text-gray-900"
                  id="school_period_id"
                  name="school_period_id"
                  value={school_period_id}
                  onChange={handleInputChange}
                >
                  {
                    periods.map(
                      ({id, name}) => <option key={id} value={id}>{name}</option>
                    )
                  }
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
  )
}

export default SectionsForm
