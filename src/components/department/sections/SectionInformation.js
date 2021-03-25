import React from 'react';

const SectionInformation = ({
  name,
  shift,
  trimester,
  course,
  school_period,
}) => {
  
  return (
    <div className="bg-white p-5 m-2 mt-5 rounded-lg grid md:grid-cols-3 gap-4 sm:grid-cols-2">
      <div>
        <h3 className="font-bold">Nombre:</h3>
        <p>{name}</p>
      </div>
      <div>
        <h3 className="font-bold">Turno</h3>
        <p>{shift.nombre}</p>
      </div>
      <div>
        <h3 className="font-bold">Periodo</h3>
        <p>{school_period.name}</p>
      </div>
      <div>
        <h3 className="font-bold">Trimestre</h3>
        <p>{trimester}</p>
      </div>
      <div>
        <h3 className="font-bold">Trayecto</h3>
        <p>{course.name}</p>
      </div>
    </div>
  );
}

export default SectionInformation;
