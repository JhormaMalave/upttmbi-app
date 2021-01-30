import React from 'react'
import { getSubjectById } from '../../../selectors/getSubjectById';
import { Redirect, useParams, Link } from 'react-router-dom'
import Form from '../../../components/department/subjects/Form';

const SubjectAddScreen = () => {

  return (
    <>
      <div className="relative bg-indigo-600 md:pt-20 pb-20 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <h1 className="font-bold text-4xl text-white pb-4">Agregar asignatura</h1>
        </div>
      </div>
      <div className="bg-white p-5 m-10 rounded-lg ">
        <Form />
      </div>
    </>
  )
}

export default SubjectAddScreen;
