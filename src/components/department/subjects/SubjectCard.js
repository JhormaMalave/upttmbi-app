import React from 'react';
import {Link} from 'react-router-dom';

const SubjectCard = ({subject}) => {
  return (
    <Link className="flex flex-row justify-between items-center bg-white m-2 p-6 rounded-lg w-full sm:w-auto sm:m-4 sm:flex-col" to={`/department/subjects/${subject.id}`}>
      <h3 className="text-xs uppercase font-bold">{subject.name}</h3>
      <p className="text-gray-400 text-center"><span className="font-bold">UC:</span> {subject.uc}</p>
    </Link>
  )
}

export default SubjectCard;