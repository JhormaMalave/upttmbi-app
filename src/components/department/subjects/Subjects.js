import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetSubjects } from '../../../actions/subject';
import SubjectCard from './SubjectCard';


const Subjects = ({traject}) => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(startGetSubjects())
    
  }, [])
  // const subjects = []
  const subjects = useSelector(state => state.subject)

  return (
    <>
      {
        (!subjects.length > 0)
        ? 
          <h2 className="m-5 font-bold">No se encontraron asignaturas</h2>
        :
          <div className="flex flex-wrap mt-4">
            {
              subjects.map((subject) => (
                <SubjectCard key={subject.id} subject={subject} />
              ))
            }
          </div>
      }
    </>
  )
}

export default Subjects;