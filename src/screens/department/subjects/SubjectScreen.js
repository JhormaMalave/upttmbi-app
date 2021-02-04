import React, {useMemo} from 'react'
import { getSubjectById } from '../../../selectors/getSubjectById';
import { Redirect, useParams, Link } from 'react-router-dom'
import SubjectInformation from '../../../components/department/subjects/SubjectInformation';

const SubjectScreen = () => {
  const { subjectId } = useParams();
  const subject = useMemo(()=> getSubjectById(parseInt(subjectId)), [subjectId]);

  if( !subject ){
    return (<Redirect to="/subjects" />);
  }

  return (
    <>
      <div className="relative bg-indigo-600 md:pt-20 pb-20 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <h1 className="font-bold text-4xl text-white pb-4">{subject.name}</h1>
          <div>
            <Link className="text-white flex" to="/subjects/:idSubject/edit">
              <svg className="w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
              <p>Modificar</p>
            </Link>
            <Link className="text-white flex" to="/subjects/:idSubject/edit">
              <svg className="w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <p>Eliminar</p>
            </Link>
          </div>
        </div>
      </div>
      <SubjectInformation subject={subject} />
    </>
  )
}

export default SubjectScreen;
