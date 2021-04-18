import React from 'react';
import { useDispatch } from 'react-redux';
import { removeAlert } from '../store/actions/ui';

const Alert = ({type, message}) => {
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(removeAlert());
  }

  return (
    <div className="sticky inset-x-0 z-50 top-2 m-2 shadow-md inset-0 text-white px-6 py-4 border-0 rounded-lg relative mb-4 bg-red-400">
      <span className="text-xl inline-block mr-5 align-middle">
        <svg className="h-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </span>
      <span className="inline-block align-middle mr-8">
        {message}
      </span>
      <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none" onClick={handleClose}>
        <span>×</span>
      </button>
    </div>
  );
}

export default Alert;
