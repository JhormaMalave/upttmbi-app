import React, {useState} from 'react';
import Sections from '../../../components/department/sections/Sections';
import SelectTraject from '../../../components/trajects/SelectTraject';

const SectionsScreen = () => {
  const [traject, setTraject] = useState(1)

  return (
    <>
      <div className="relative bg-indigo-600 md:pt-20 pb-20 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <h1 className="font-bold text-4xl text-white pb-4">Secciones</h1>
          <h2 className="font-bold text-2xl text-indigo-300">Selecciona un trayecto{traject} </h2>
          <SelectTraject setTraject={setTraject} />
        </div>
      </div>
      <Sections />
    </>
  )
}

export default SectionsScreen;
