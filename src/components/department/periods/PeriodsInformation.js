import React from 'react';

const PeriodsInformation = ({
  start_date:startDate,
  end_date:endDate,
  name,
  created_at:createdAt,
  updated_at:updatedAt,
  state,
}) => {
  return (
    <div className="bg-white p-5 m-2 mt-5 rounded-lg grid md:grid-cols-3 gap-4 sm:grid-cols-2">
      <div>
        <h3 className="font-bold">Inicio:</h3>
        <p>{startDate}</p>
      </div>
      <div>
        <h3 className="font-bold">Fin:</h3>
        <p>{endDate || 'No definido'}</p>
      </div>
      <div>
        <h3 className="font-bold">Corte:</h3>
        <p>{name}</p>
      </div>
      <div>
        <h3 className="font-bold">Estado:</h3>
        {
          state ?
              <p className="text-green-400">Activo</p>
            :
              <p className="text-yellow-500">Inactivo</p>
        }
      </div>
      <div>
        <h3 className="font-bold">Creado:</h3>
        <p>{createdAt}</p>
      </div>
      <div>
        <h3 className="font-bold">Actualizado:</h3>
        <p>{updatedAt}</p>
      </div>
    </div>
  );
}

export default PeriodsInformation;
