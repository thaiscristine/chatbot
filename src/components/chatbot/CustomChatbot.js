import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function CustomChatbot(props) {

  const theme = {
    background: "white",
    fontFamily: "bc-novatica-cyr, Arial, Helvetica, sans-serif",
    headerBgColor: "#fa7268",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#fa7268",
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
       message: "Olá, sou a LIA[...]",
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
          trigger: () => {
              props.eventHandler("mei");
              return "perguntar ramo"
          }
        },
        {
          value: "microempresa",
          label: "Microempresa",
          trigger: () => {
              props.eventHandler("micro");
              return "perguntar ramo"
          }
        },
           {
          value: "media",
          label: "Média",
          trigger: () => {
              props.eventHandler("media");
              return "perguntar ramo"
          }
        }
      ]
    },
      {
       id: "perguntar ramo",
       message: "{previousValue}, Em qual ramo a sua empresa se encaixa?",
       trigger: "mostrar ramo"
    },

    {
       id: "mostrar ramo",
       options: [
        {
          value: 'comercio',
          label: "Comércio",
          trigger: () => {
              props.eventHandler("comercio");
              return "programa"
          }
        },
        {
          value: "industria",
          label: "indústria",
          trigger: () => {
              props.eventHandler("industria");
              return "programa"
          }
        },
           {
          value: "servicos",
          label: "serviços",
          trigger: () => {
              props.eventHandler("servicos");
              return "programa"
          }
        }
      ]
    },

      {
       id: "programa",
       message: "{previousValue}, Vamos começar montar a estrategia agora[...]",
       trigger: "perguntar renda"
    },
      {
       id: "perguntar renda",
       message: "Qual foi sua receita total no último mês?",
       trigger: "resposta renda"
    },
      //(precisa ajeitar para só deixar user digitar números)
      // precisa ajeitar para dar a renda pos ou neg
      {
       id: "resposta renda",
       user: true,
          trigger: "renda positiva"
    },
      {
       id: "renda positiva",
       message: "{previousValue}, renda positiva",
       trigger: "pergunta saude financeira 1"
    },
      {
       id: "renda negativa",
       message: "{previousValue}, renda negativa",
       trigger: "acabou"
    },
      {
       id: "erro renda",
       message: "{previousValue}, não entendi. Digite somente um número, pos ou neg",
       trigger: "perguntar renda"
    },
      {
       id: "pergunta saude financeira 1",
       message: "você economiza?",
       trigger: "resposta 1"
    },
      {
       id: "resposta 1",
       options: [
        {
          value: 'sim',
          label: "Sim",
          trigger: () => {
              props.eventHandler("economiza");
              return "pergunta saude financeira 2"
          }
        },
        {
          value: "nao",
          label: "Não",
          trigger: () => {
              return "acabou"
          }
        },
      ]
    },

      {
       id: "pergunta saude financeira 2",
       message: "pergunta saude financeira 2?",
       trigger: "resposta 2"
    },
      {
       id: "resposta 2",
       options: [
        {
          value: 'sim',
          label: "Sim",
          trigger: () => {
              props.eventHandler("pratica2");
              return "pergunta saude financeira 3"
          }
        },
        {
          value: "nao",
          label: "Não",
          trigger: () => {
              return "acabou"
          }
        },
      ]
    },
            {
       id: "pergunta saude financeira 3",
       message: "pergunta saude financeira 3?",
       trigger: "resposta 3"
    },
      {
       id: "resposta 3",
       options: [
        {
          value: 'sim',
          label: "Sim",
          trigger: () => {
              props.eventHandler("pratica3");
              return "acabou"
          }
        },
        {
          value: "nao",
          label: "Não",
          trigger: () => {
              return "acabou"
          }
        },
      ]
    },

      {
      id: "acabou",
      message: "😂😂😂😂 se vira ae mano kkkkk 😂😂😂😂",
      end: true
    }
  ];
  
  return (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} {...config} />
  </ThemeProvider>
  )
}
export default CustomChatbot;