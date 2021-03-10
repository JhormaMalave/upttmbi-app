import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PeriodsInformation from '../../../components/department/periods/PeriodsInformation';
import { startLoadSchoolPeriod, removeActiveSchoolPeriod } from '../../../store/actions/periods';

const PeriodScreen = () => {
  const { periodId } = useParams();
  const dispatch = useDispatch();

  const { active:schoolPeriod } = useSelector(state => state.schoolPeriod);

  const startDate = schoolPeriod && new Date(schoolPeriod.start_date);

  // Load period school
  useEffect(() => {
    dispatch(startLoadSchoolPeriod(periodId));
  }, [dispatch, periodId]);

  // Remove active school period
  useEffect(() => {
    return () => {
      dispatch(removeActiveSchoolPeriod())
    }
  }, [dispatch]);

  return (
    <>
      { schoolPeriod ?
      <>
        <div className="relative bg-indigo-600 py-10 m-2 rounded-xl">
          <div className="px-4 md:px-10 mx-auto w-full">
            <h1 className="font-bold text-4xl text-white pb-4">Periodo {startDate.getFullYear()} - {schoolPeriod.name}</h1>
            <div>
              <Link className="text-white flex" to="/department/sections/:idSection/edit">
                <svg className="w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                <p>Modificar</p>
              </Link>
              <Link className="text-white flex" to="/department/sections/:idSection/edit">
                <svg className="w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <p>Eliminar</p>
              </Link>
            </div>
          </div>
        </div>
        <PeriodsInformation {...schoolPeriod} />
      </>
      :
        <></>
      }
    </>
  );
}

export default PeriodScreen;
