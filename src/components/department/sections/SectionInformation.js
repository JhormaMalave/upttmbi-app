import React from 'react';

const SectionInformation = () => {
  return (
    <div className="bg-white p-5 m-10 rounded-lg grid md:grid-cols-3 gap-4 sm:grid-cols-2">
      <div>
        <h3 className="font-bold">Carrera:</h3>
        <p>Informática</p>
      </div>
      <div>
        <h3 className="font-bold">Nombre:</h3>
        <p>7</p>
      </div>
      <div>
        <h3 className="font-bold">Trayecto:</h3>
        <p>4</p>
      </div>
      <div>
        <h3 className="font-bold">Trimestre:</h3>
        <p>2</p>
      </div>
      <div>
        <h3 className="font-bold">Turno:</h3>
        <p>Fin de semana</p>
      </div>
      <div>
        <h3 className="font-bold">Periodo:</h3>
        <p>2019 - 3</p>
      </div>
      <div>
        <h3 className="font-bold">Estado:</h3>
        <p>Activo</p>
      </div>
    </div>
  );
}

export default SectionInformation;
