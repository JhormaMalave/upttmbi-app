import React from 'react';

import SubjectCard from './SubjectCard';


const Subjects = ({traject}) => {

  const subjects = []

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