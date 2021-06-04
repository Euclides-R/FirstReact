import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ 
    typeInput, 
    placeHolder
}) {
    return (
        <input 
        className="insert--registration"
        type={typeInput}
        placeholder={placeHolder}
        >
        </input>
    )  
}

Input.propTypes = {
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
}