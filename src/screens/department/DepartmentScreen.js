import React from 'react'

const DepartmentScreen = () => {
  return (
    <>
    <section className="mt-2">
      <div className="container mx-auto px-2">
        <div className="flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
          <div className="px-6">
            <div className="text-center mt-12">
              <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                Departamento de Informática
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                Trujillo, Barbarita de la Torre
              </div>
              <div className="mb-2 text-gray-700">
                <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                Universidad Politécnica Territorial del Estado Trujillo "Mario Briceño Iragorry"
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-gray-300 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-gray-800">
                    Es una Institución pública que forma recurso humano altamente calificado que responda a las exigencias del entorno, con habilidades, destrezas y la creatividad necesaria para innovar el trabajo productivo, con actitud de permanente búsqueda de conocimiento, como parte de su formación y con la capacidad suficiente para organizar y administrar empresas que ayuden a impulsar el desarrollo y ofrezcan asistencia técnica eficiente.
                  </p>
                  <a
                    href="https://upttmbi.edu.ve/site/index.html"
                    className="font-normal text-indigo-500"
                  >
                    Mas información
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </> 
  )
}

export default DepartmentScreen
