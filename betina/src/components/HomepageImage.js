import './HomepageImage.css';
import React from 'react';

function HomepageImage() {
  return (
    <img src={process.env.PUBLIC_URL + '/alice.jpg'} class="homepage-logo" alt='Our muse' />
  );
}

export default HomepageImage;

