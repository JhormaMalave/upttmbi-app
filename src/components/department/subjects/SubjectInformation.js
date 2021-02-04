import React from 'react';
import PropTypes from 'prop-types';

const SubjectInformation = ({subject}) => {
  return (
    <div className="bg-white p-5 m-10 rounded-lg grid md:grid-cols-3 gap-4 sm:grid-cols-2">
      <div>
        <h3 className="font-bold">Carrera:</h3>
        <p>Informática</p>
      </div>
      <div>
        <h3 className="font-bold">Nombre:</h3>
        <p>{subject.name}</p>
      </div>
      <div>
        <h3 className="font-bold">Trayecto:</h3>
        <p>{subject.traject}</p>
      </div>
      <div>
        <h3 className="font-bold">Unidades curriculares:</h3>
        <p>{subject.uc}</p>
      </div>
    </div>
  );
}

SubjectInformation.prpTypes = {
  subject: PropTypes.object.isRequired,
}

export default SubjectInformation
