import React from 'react';
import SectionCard from './SectionCard';

const Sections = () => {
  return (
    <>
      {
        //<h2 className="m-5 font-bold">No se encontraron asignaturas</h2>
      }
      <div className="flex flex-wrap mt-4">
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
      </div>
    </>
  );
}

export default Sections;
