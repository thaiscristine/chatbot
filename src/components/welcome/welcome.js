import React from "react";
import { Avatar } from '../elements/style';
import imgLiaIntro from '../../assets/lia_intro.png';

function welcome() {
  return (
    <div>
        <img src={imgLiaIntro} alt="Lia"/>
    </div>
  );
}

export default welcome;
