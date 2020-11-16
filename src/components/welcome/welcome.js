import React from "react";
import imgLiaIntro from '../../assets/LIA_avatar_intro.png';
import { Content, Button  } from './style';
import { FiArrowRight } from "react-icons/fi";

function welcome() {
  return (
    <Content>
      <div>
        <img src={imgLiaIntro} alt="Lia" style={{ maxWidth: '300px' }} />
      </div>
      <div>
        <h1>Olá, me chamo LIA!</h1>
        <p>Eu vou analisar a saúde financeira da sua empresa e sugerir formas de como previnir perrengues! 
        <br /><br />
        Vamos juntos?</p>

        <Button href="#chat" alt="Começar análise">Iniciar a análise <FiArrowRight></FiArrowRight></Button>
      </div>
    </Content>
  );
}

export default welcome;
