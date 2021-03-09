import React from 'react'
import PeriodsForm from '../../../components/department/periods/PeriodsForm'

const PeriodsAddScreen = () => {
  return (
    <div>
      <div className="relative bg-indigo-600 md:pt-20 pb-20 pt-12 m-2 rounded-xl	">
        <div className="px-4 md:px-10 mx-auto w-full">
          <h1 className="font-bold text-4xl text-white pb-4">Periodos universitario</h1>
          <h2 className="font-bold text-2xl text-indigo-300">
            Agregar periodo
          </h2>
        </div>
      </div>
      <PeriodsForm />
    </div>
  )
}

export default PeriodsAddScreen
