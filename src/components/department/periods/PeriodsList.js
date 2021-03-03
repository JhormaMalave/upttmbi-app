import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadPeriodSchool } from '../../../actions/periods';
import PeriodsLi from './PeriodsLi';

const PeriodsList =React.memo(({filter}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadPeriodSchool())
  }, [dispatch, filter])

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
  filter: PropTypes.string.isRequired,
}


export default PeriodsList;
