import React from 'react';

const PeriodsInformation = ({
  name,
  initial_date,
  final_date,
  status,
}) => {
  return (
    <div className="bg-white p-5 m-2 mt-5 rounded-lg grid md:grid-cols-3 gap-4 sm:grid-cols-2">
      <div>
        <h3 className="font-bold">Nombre:</h3>
        <p>{name}</p>
      </div>
      <div>
        <h3 className="font-bold">Inicio:</h3>
        <p>{initial_date}</p>
      </div>
      <div>
        <h3 className="font-bold">Fin:</h3>
        <p>{final_date || 'No definido'}</p>
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

export default PeriodsInformation;
