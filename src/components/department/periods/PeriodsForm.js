import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { activeSchoolPeriod, startNewSchoolPeriod, startUpdatedSchoolPeriod } from '../../../store/actions/periods';
import FormMessageError from '../../FormMessageError';


const PeriodsForm = ({schoolPeriod, type}) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }} = useForm({xd: 11});

  const onSubmit = (data) => {
    dispatch(activeSchoolPeriod(data));

    if (type === 'edit') {
      dispatch(startUpdatedSchoolPeriod());
    } else {
      dispatch(startNewSchoolPeriod());
    }
  }  

  /*
  useEffect(() => {
    dispatch(activeSchoolPeriod({
      ...form
    }));
  }, [dispatch, form])
  */

  return (
    <div className="bg-white p-5 m-2 mt-5 rounded-lg ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col my-2">
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="initial_date">
                Fecha de inicio
              </label>
              <input
                className={
                  `${errors.hasOwnProperty('initial_date') &&
                  'input-form-error'} input-form sm:text-sm`
                }
                id="initial_date"
                type="date"
                {...register('initial_date', {required: true})}
              />
              {/* Show message if there is error in the email form */}
              {errors.initial_date && errors.initial_date.type === "required" && (
                <FormMessageError message="Debes ingresar la fecha que inicia el periodo" />
              )}
            </div>
            <div className="md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="final_date">
                Fecha de culminación
              </label>
              <input 
                className='input-form sm:text-sm'
                id="final_date"
                type="date"
                {...register("final_date")}
              />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="name">
                Nombre
              </label>
              <div className="relative">
                <input
                  className={
                  `${errors.hasOwnProperty('name') &&
                    'input-form-error'} input-form sm:text-sm`
                  }
                  id="name"
                  type="text"
                  {...register("name", { required: true})}
                />
                  {/* Show message if there is error in the email form */}
                  {errors.name && errors.name.type === "required" && (
                    <FormMessageError message="Debes ingresar el nombre del periodo" />
                  )}
              </div>
            </div>
            <div className="md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="status">
                Estado
              </label>
              <div className="relative">
                <select
                  className={
                    `${errors.hasOwnProperty('status') &&
                    'input-form-error'} input-form sm:text-sm`
                  }
                  id="status"
                  {...register('status', { required: true})}
                >
                  <option value="true">Activo</option>
                  <option value="false">Inactivo</option>
                </select>
                {/* Show message if there is error in the email form */}
                {errors.status && errors.status.type === "required" && (
                  <FormMessageError message="Debes seleccionar el estado inicial" />
                )}
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
