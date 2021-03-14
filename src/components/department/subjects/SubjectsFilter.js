import React, {useState} from 'react'

const SubjectsFilter = () => {
  const [showHiddeFilter, setShowHiddeFilter] = useState(false);

  return (
    <div className="bg-white p-5 m-2 mt-5 rounded-lg ">
      <form>
        <div className="flex flex-col my-2">
          <div className="-mx-3 md:flex mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="name">
                Nombre
              </label>
              <input
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="name"
                name="name"
                type="text" />
            </div>
          </div>
          {
            showHiddeFilter &&
              <>
                <div className="-mx-3 md:flex mb-6">
                  <div className="md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="name">
                    UCs
                    </label>
                    <input
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      id="name"
                      name="name"
                      type="number" />
                  </div>
                  <div className="md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="state">
                      Trayecto
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border bg-white rounded px-3 py-2 outline-none border-gray-300 placeholder-gray-500 text-gray-900"
                        id="state"
                        name="state"
                      >
                        <option value="true">1</option>
                        <option value="false">2</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="state">
                      Tipo
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border bg-white rounded px-3 py-2 outline-none border-gray-300 placeholder-gray-500 text-gray-900"
                        id="state"
                        name="state"
                      >
                        <option></option>
                        <option value="true">Taller</option>
                        <option value="false">Curso</option>
                      </select>
                    </div>
                  </div>
                  <div className="md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="state">
                      Estado
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border bg-white rounded px-3 py-2 outline-none border-gray-300 placeholder-gray-500 text-gray-900"
                        id="state"
                        name="state"
                      >
                        <option value="true">Activo</option>
                        <option value="false">Inactivo</option>
                      </select>
                    </div>
                  </div>
                </div>
              </>
          }
          <div className="flex justify-end items-center">
            <p
              className="cursor-pointer mr-2  text-sm text-gray-700 hover:text-gray-900 transition-all duration-200"
              onClick={() => {setShowHiddeFilter(!showHiddeFilter)}}
            >
              { showHiddeFilter ? 'Ocultar busqueda' :  'Busqueda avanzada' }
            </p>
            <button
              type="submit"
              className="group relative w-40 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Buscar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SubjectsFilter
