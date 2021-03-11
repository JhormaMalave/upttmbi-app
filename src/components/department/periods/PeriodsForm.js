import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useForm } from '../../../hooks/useForm';
import { activeSchoolPeriod, startNewSchoolPeriod, startUpdatedSchoolPeriod } from '../../../store/actions/periods';
import { setAlert } from '../../../store/actions/ui';

const PeriodsForm = ({schoolPeriod, type}) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      //return 0;
    }

    if (type === 'edit') {
      dispatch(startUpdatedSchoolPeriod());
    } else {
      dispatch(startNewSchoolPeriod());
    }
  }  

  const initForm = schoolPeriod ? schoolPeriod : {
    start_date: '',
    end_date: '',
    name: '1',
    state: 'true'
  }
  const {form, handleInputChange} = useForm(initForm);
  const {start_date, end_date, name, state} = form;
  
  useEffect(() => {
    dispatch(activeSchoolPeriod({
      ...form
    }));
  }, [dispatch, form])
  console.log(name)

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
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="start_date">
                Fecha de inicio
              </label>
              <input
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="start_date"
                name="start_date"
                value={start_date}
                onChange={handleInputChange}
                type="date" />
            </div>
            <div className="md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="end_date">
                Fecha de culminación
              </label>
              <input 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="end_date"
                name="end_date"
                value={end_date}
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
            className="group relative w-40 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default PeriodsForm;
