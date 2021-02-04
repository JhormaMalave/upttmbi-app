import React from 'react'
import Form from '../../../components/department/sections/Form';

const SectionsAddScreen = () => {

  return (
    <>
      <div className="relative bg-indigo-600 md:pt-20 pb-20 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <h1 className="font-bold text-4xl text-white pb-4">Agregar sección</h1>
        </div>
      </div>
      <div className="bg-white p-5 m-10 rounded-lg ">
        <Form />
      </div>
    </>
  )
}

export default SectionsAddScreen;
