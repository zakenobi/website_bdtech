import React from 'react';
import img from './images/IMG20200310173648.jpg';

function HomepageImage() {
  const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';
  return (
    <img src={img} style={{width: 650}} alt='Image of Golden Gate Bridge' />
  );
}

export default HomepageImage;