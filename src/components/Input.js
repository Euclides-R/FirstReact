import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Input({ 
    children,
    kind,
    className,
    typeInput, 
    placeHolder
}) {
    return (
        <input 
        className={classnames(`input input-${kind}`, className)}
        type={typeInput}
        placeholder={placeHolder}
        >
            {children}
        </input>
    )  
}