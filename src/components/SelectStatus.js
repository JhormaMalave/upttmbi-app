import React from 'react';

const SelectStatus = () => {

  return (
    <form>
      <select className="block w-full md:w-auto appearance-none  bg-white border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
        <option>Activo</option>
        <option>Jubilado</option>
        <option>Reposo</option>
      </select>
      <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </form>
  );
}

export default SelectStatus;