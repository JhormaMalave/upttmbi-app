import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startLoadSubjects } from '../../../store/actions/subjects';
import SubjectsLi from './SubjectsLi';

const SubjectsList =React.memo(({urlParams}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadSubjects(urlParams))
  }, [dispatch, urlParams])

  const { subjects } = useSelector(state => state.subject)

  return (                  
    <div className="bg-white shadow overflow-hidden sm:rounded-md mx-2 mt-5">
      <ul className="divide-y divide-gray-200">
        {
          subjects.map(subject => <SubjectsLi key={subject.id} {...subject} />)
        }
      </ul> 
    </div>
  );
});

export default SubjectsList;
