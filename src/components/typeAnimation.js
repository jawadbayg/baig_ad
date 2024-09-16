import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  
  const fontSize = window.innerWidth <= 768 ? '1.2em' : '1.5em';

  return (
    <div>
      <TypeAnimation
        sequence={[
          'We create stunning 3D Signboards',
          1000, 
          'We design vibrant Neon Signs',
          1000, 
          'We manufacture Stainless Steel Letters',
          1000, 
          'We install professional Billboard Signs',
          1000, 
          'We offer end-to-end Advertisement Solutions',
          1000, 
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: fontSize, display: 'inline-block' }}
        repeat={Infinity}
      />
    </div>
  );
};

export default ExampleComponent;
