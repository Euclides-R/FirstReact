import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ 
    type, 
    placeHolder
}) {
    return (
        <input 
        className="insert--registration"
        type={type}
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