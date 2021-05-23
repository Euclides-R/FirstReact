import React from 'react';

export default props => (
  <div className="button__login">
    <a href="#">
      <i className="fas fa-user-plus"></i> {props.title}
    </a>
  </div>
);
