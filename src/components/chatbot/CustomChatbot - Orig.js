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
       message: "Olá, bem vindo(a),",
       trigger: "Perguntar Nome"
    },
    {
       id: "Perguntar Nome",
       message: "Please type your name?",
       trigger: "Waiting user input for name"
    },
    {
       id: "Waiting user input for name",
       user: true,
       trigger: "Asking options to eat"
    },
    {
       id: "Asking options to eat",
       message: "Hi {previousValue}, Please click on what you want to eat!",
       trigger: "Displaying options to eat"
    },
    {
       id: "Displaying options to eat",
       options: [
        {
          value: "pizza",
          label: "Pizza",
          trigger: "Asking for meies in Pizza"
        },
        { 
          value: "burger",
          label: "Burger",
          trigger: "Burger Not available"
        } 
      ]
    },
    {
       id: "Burger Not available",
       message: "Sorry, We don't have burger available at the moment. Would you like to try our pizza?",
       trigger: "Asking for pizza after burger"
    },
    {
       id: "Asking for pizza after burger",
       options: [
        {
          value: true,
          label: "Yes",
          trigger: "Asking for meies in Pizza"
        },
        { 
          value: "false",
          label: "No",
          trigger: "acabou"
        } 
      ]
    },
    {
       id: "Asking for meies in Pizza",
       message: "Would you like to have meies in your pizza",
       trigger: "Adding meies in Pizza"
    },
    {
       id: "Adding meies in Pizza",
       options: [
        {
          value: true,
          label: "Yes",
          trigger: () => {
              props.eventHandler("mei");
              return "Asking for micro in Pizza"
            }
        },
        { 
          value: "false",
          label: "No",
          trigger: "Asking for micro in Pizza"
        } 
      ]
    },
    
    {
       id: "Asking for micro in Pizza",
       message: "Would you like to have micro in your pizza",
       trigger: "Adding micro in Pizza"
    },

    {
       id: "Adding micro in Pizza",
       options: [
        {
          value: true,
          label: "Yes",
          trigger: () => {
              props.eventHandler("micro");
              return "Asking for Corn in Pizza"  
            }
        },
        { 
          value: "false",
          label: "No",
          trigger: "Asking for Corn in Pizza"
        } 
      ]
    },
    {
       id: "Asking for Corn in Pizza",
       message: "Would you like to have corn in your pizza",
       trigger: "Adding Corn in Pizza"
    },

    {
       id: "Adding Corn in Pizza",
       options: [
          {
            value: true,
            label: "Yes",
            trigger: () => {
                props.eventHandler("corn");
                return "Asking for medias in Pizza"
              }
          },
          { 
            value: "false",
            label: "No",
            trigger: "Asking for medias in Pizza"
          } 
      ]
    },
     
    {
       id: "Asking for medias in Pizza",
       message: "Would you like to have medias in your pizza",
       trigger: "Adding medias in Pizza"
    },

    {
      id: "Adding medias in Pizza",
      options: [
      {
          value: true,
          label: "Yes",
          trigger: () => {
              props.eventHandler("media");
              return "acabou"
            }
        },
        { 
          value: "false",
          label: "No",
          trigger: "acabou"
        } 
      ]
    },
    {
      id: "acabou",
      message: "Have a great day !!",
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