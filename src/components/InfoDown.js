import React from 'react';
import PropTypes from 'prop-types';

export default function InfoDown({ title, text, color }) {
    return (
        <div className={(`info-down info-down-${color} radius-form`)}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

InfoDown.propTypes = {
    color: PropTypes.string
};
  
InfoDown.defaultProps = {
    color: 'primary',
};