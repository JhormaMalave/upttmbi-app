import React from 'react';

const SubjectsInformation = ({
  name,
  status,
  value,
  curricular_unit_type_id:curricularUnitTypeId,
  duration,
  course_id:courseId,
}) => {
  return (
    <div className="bg-white p-5 m-2 mt-5 rounded-lg grid md:grid-cols-3 gap-4 sm:grid-cols-2">
      <div>
        <h3 className="font-bold">Nombre:</h3>
        <p>{name}</p>
      </div>
      <div>
        <h3 className="font-bold">Trayecto:</h3>
        <p>{courseId || 'No definido'}</p>
      </div>
      <div>
        <h3 className="font-bold">UCs:</h3>
        <p>{value}</p>
      </div>
      <div>
        <h3 className="font-bold">Tipo:</h3>
        <p>{curricularUnitTypeId}</p>
      </div>
      <div>
        <h3 className="font-bold">Duración:</h3>
        <p>{duration}</p>
      </div>
      <div>
        <h3 className="font-bold">Estado:</h3>
        {
          status ?
              <p className="text-green-400">Activo</p>
            :
              <p className="text-yellow-500">Inactivo</p>
        }
      </div>
    </div>
  );
}

export default SubjectsInformation;
