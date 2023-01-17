import React from 'react';
import spinner from '../assets/spinner.gif';

function Spinner() {
  return (
    <img
      src={spinner}
      alter="Loading..."
      style={{ width: '100px', margin: 'autp', display: 'block' }}
    />
  );
}

export default Spinner;
