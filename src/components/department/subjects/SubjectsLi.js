import React from 'react';
import { Link } from 'react-router-dom';

const SubjectsLi = ({id, name, value, status}) => {
  return (
    <li>
      <Link to={`/department/subjects/${id}`} >
        <div className="block hover:bg-gray-50">
          <div className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-thin text-gray-700 truncate">
                UC: {value} / Curso
              </p>
              <div className="ml-2 flex-shrink-0 flex">
                {
                  status ?
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Activo
                    </p>
                    :
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Inactivo
                      </p>
                    </div>
                }
              </div>
            </div>
            <div className="mt-2 sm:flex sm:justify-between">
              <div className="sm:flex">
                <p className="flex items-center text-sm font-semibold text-gray-500">
                  <time dateTime="2020-01-07">{name}</time>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default SubjectsLi;
