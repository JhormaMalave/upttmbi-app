import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PeriodsLi = ({id, name, initial_date, final_date, status}) => {  

  return (
    <li>
      <Link to={`/department/periods/${id}`} >
        <div className="block hover:bg-gray-50">
          <div className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-thin text-gray-700 truncate">
                {initial_date} / {final_date || 'No esta definido'}
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

PeriodsLi.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  initial_date: PropTypes.string.isRequired,
  final_date: PropTypes.string,
  status: PropTypes.bool.isRequired,
}

export default PeriodsLi;
