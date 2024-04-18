import React from 'react';
import logoImage from './logo.png'; // Import your logo image

function Logo({ width = '150px' , height = '100'}) {
  return (
    <img src={logoImage} alt="Logo" style={{ width: width , height:height}} />
  );
}

export default Logo;
