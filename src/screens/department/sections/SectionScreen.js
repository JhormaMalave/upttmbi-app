import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import SectionsInformation from '../../../components/department/sections/SectionInformation';
import SectionsForm from '../../../components/department/sections/SectionsForm';
import { removeActiveSection, startLoadSection } from '../../../store/actions/sections';

const SectionScreen = () => {
  const { sectionId } = useParams();
  const dispatch = useDispatch();

  const { active:section } = useSelector(state => state.section);

  const [showHideForm, setShowHideForm] = useState(false);
  
  // Load period school
  useEffect(() => {
    dispatch(startLoadSection(sectionId));
  }, [dispatch, sectionId]);

  // Remove active school period
  useEffect(() => {
    return () => {
      dispatch(removeActiveSection())
    }
  }, [dispatch]);

  return (
    <>
      { section ?
      <>
        <div className="flex flex-row justify-end mr-2 mt-4">
          <button
            type="submit"
            onClick={() => {setShowHideForm(!showHideForm)}}
            className="group relative w-40 flex justify-center py-2 mr-2 px-4 border border-transparent text-sm font-medium rounded-md text-blue-500 bg-white hover:bg-blue-600 hover:text-white"
          >
            {
              !showHideForm ? 
                <>
                  <svg className="w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                  Editar
                </>
                :
                <>
                  <svg className="w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Información
                </>
            }
            
          </button>
          <button
            type="submit"
            className="group relative w-40 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-red-500 bg-white hover:bg-red-600 hover:text-white"
          >
            <svg className="w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Eliminar
          </button>
        </div>
        {
          !showHideForm ? 
            <SectionsInformation {...section} />
            :
            <SectionsForm
              section={{
                id: section.id,
                name: section.name,
                shift_id: section.shift.id,
                trimester: section.trimester,
                course_id: section.course.id,
                school_period_id: section.school_period.id,
              }}
              type='edit'
            />
        }
      </>
      :
        <></>
      }
    </>
  )
}

export default SectionScreen;
