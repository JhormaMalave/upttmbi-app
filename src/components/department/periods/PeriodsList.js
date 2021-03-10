import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { startLoadSchoolPeriods } from '../../../store/actions/periods';
import PeriodsLi from './PeriodsLi';

const PeriodsList =React.memo(({state}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadSchoolPeriods({state}))
  }, [dispatch, state])

  const { periods } = useSelector(state => state.schoolPeriod)

  return (                  
    <div className="bg-white shadow overflow-hidden sm:rounded-md mx-2 mt-5">
      <ul className="divide-y divide-gray-200">
        {
          periods.map(period => <PeriodsLi key={period.id} {...period} />)
        }
      </ul> 
    </div>
  );
});


PeriodsList.propTypes = {
  state: PropTypes.string,
}


export default PeriodsList;
