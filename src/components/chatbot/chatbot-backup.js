import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function CustomChatbot(props) {

  const theme = {
    background: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: "#00B2B2",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#00B2B2",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c"
   };

  const config = {
      width: "300px",
      height: "400px",
      floating: true
  };

  //dialogue goes here
  const steps = [
    {
       id: "Saudações",
       message: "Olá, sou a  LIA[...]",
       trigger: "Perguntar categoria"
    },
    {
       id: "Perguntar categoria",
       message: "Em qual categoria a sua empresa se encaixa?",
       trigger: "Escolher categoria"
    },
    {
       id: "Escolher categoria",
       options: [
        {
          value: "mei",
          label: "Mei",
          trigger: "perguntar ramo mei"
        },
        {
          value: "microempresa",
          label: "Microempresa",
          trigger: "perguntar ramo micro"
        },
           {
          value: "media",
          label: "Média",
          trigger: "perguntar ramo media"
        }
      ]
    },
      {
       id: "perguntar ramo mei",
       message: "Em qual ramo a sua empresa mei se encaixa?",
       trigger: "mostrar ramo mei"
    },

    {
       id: "mostrar ramo mei",
       options: [
        {
          value: 'comercio',
          label: "Comércio",
          trigger: "montar programa comércio mei"
        },
        {
          value: "industria",
          label: "industria",
          trigger: "montar programa indústria mei"
        },
           {
          value: "servicos",
          label: "serviços",
          trigger: "montar programa serviços mei"
        }
      ]
    },
            {
       id: "perguntar ramo micro",
       message: "Em qual ramo a sua empresa micro se encaixa?",
       trigger: "mostrar ramo micro"
    },

    {
       id: "mostrar ramo micro",
       options: [
        {
          value: 'comercio',
          label: "Comércio",
          trigger: "montar programa comercio micro"
        },
        {
          value: "industria",
          label: "industria",
          trigger: "montar programa industria micro"
        },
           {
          value: "servicos",
          label: "serviços",
          trigger: "montar programa serviços micro"
        }
      ]
    },
      {
       id: "perguntar ramo media",
       message: "Em qual ramo a sua empresa media se encaixa?",
       trigger: "mostrar ramo media"
    },

    {
       id: "mostrar ramo media",
       options: [
        {
          value: 'comercio',
          label: "Comércio",
          trigger: "montar programa comercio media"
        },
        {
          value: "industria",
          label: "industria",
          trigger: "montar programa industria media"
        },
           {
          value: "servicos",
          label: "serviços",
          trigger: "montar programa serviços media"
        }
      ]
    },
      {
       id: "montar programa comércio mei",
       message: "Vamos montar a estrategia agora[...]",
       trigger: "mostrar ramo media"
    },
    {
       id: "mostrar ramo media",
       options: [
        {
          value: 'comercio',
          label: "Comércio",
          trigger: "acabou"
        },
        {
          value: "industria",
          label: "industria",
          trigger: "acabou"
        },
           {
          value: "servicos",
          label: "serviços",
          trigger: "acabou"
        }
      ]
    },



      {
      id: "acabou",
      message: "Tenha um ótimo dia",
      end: true
    }
  ];
  
  return (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} {...config} />;
  </ThemeProvider>
  )
}
export default CustomChatbot;