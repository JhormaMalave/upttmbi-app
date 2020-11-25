import React, {useMemo} from 'react'
import { getSubjectById } from '../../../selectors/getSubjectById';
import { Redirect, useParams } from 'react-router-dom'

const SubjectScreen = () => {
  const { subjectId } = useParams();
  const subject = useMemo(()=> getSubjectById(parseInt(subjectId)), [subjectId]);

  if( !subject ){
    return (<Redirect to="/subjects" />);
  }

  return (
    <div className="relative bg-indigo-600 md:pt-20 pb-20 pt-12">
      <div className="px-4 md:px-10 mx-auto w-full">
        <h1 className="font-bold text-4xl text-white pb-4">{subject.name}</h1>
        <h2 className="font-bold text-2xl text-indigo-300">Selecciona un trayecto</h2>
      </div>
    </div>
  )
}

export default SubjectScreen;
