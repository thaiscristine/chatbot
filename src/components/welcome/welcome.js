import React from "react";
import imgLiaIntro from '../../assets/lia_intro.png';

function welcome() {
  return (
    <div style={{ top: '-120px', left: '-20%', position: 'absolute' }}>
        <img src={imgLiaIntro} alt="Lia" style={{ maxWidth: '800px' }} />
    </div>
  );
}

export default welcome;
