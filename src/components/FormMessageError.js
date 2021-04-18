import React from 'react';
import PropTypes from 'prop-types';

const FormMessageError = ({ message }) => {

  return (
    <div>
      <p className="text-xs italic text-red-400 pb-2">
        <i className="fas fa-exclamation-triangle"></i> { message }
      </p>
    </div>
  );
}

FormMessageError.propTypes = {
  message: PropTypes.string.isRequired,
}

export default FormMessageError;
