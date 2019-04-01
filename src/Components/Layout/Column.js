import React from 'react';

const Column = ({ children, key }) => (
  <div className="column" key={key}>
    {children}
  </div>
);

export default Column;
