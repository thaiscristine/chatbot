import React, { Component } from "react";
import "./Stairs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Base from "../base/Base";
import Welcome from "../welcome/welcome";
import Step1 from "../step1/Step1";
// import Step2 from "../step2/Step2";
import Step3 from "../step3/Step3";
import Step4 from "../step4/Step4";
import Step5 from "../step5/Step5";
import Step6 from "../step6/Step6";

import CustomChatbot from "../chatbot/CustomChatbot";

class Stairs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: true,
      zero: true,
      //category
      mei: false,
      micro: false,
      media: false,
      //segment
      comercio: false,
      industria: false,
      servicos: false,
      //practices
      economiza:false,
      pratica2:false,
      pratica3:false,
      pratica4:false,
      pratica5:false,
    };
  }

// store company category here
  clickEventHandler = category => {
    if (category === "mei") {
      this.setState({
        mei: !this.state.mei,
        welcome: false
      });
    } else if (category === "micro") {
      this.setState({
        micro: !this.state.micro,
        welcome: false
      });
    } else if (category === "media") {
      this.setState({
        media: !this.state.media,
        welcome: false
      });
    }
    if (category === "comercio") {
      this.setState({
        comercio: !this.state.comercio,
        media: false,
        micro: false,
        mei: false,
      });
    } else if (category === "industria") {
      this.setState({
        industria: !this.state.industria,
        media: false,
        micro: false,
        mei: false,

      });
    } else if (category === "servicos") {
      this.setState({
        servicos: !this.state.servicos,
        media: false,
        micro: false,
        mei: false,
      });
    }
  };
  // this quiz determines good financial health.
  //   correct answer gives you one point,up to 10
  //  scored stored separately

     clickEventHandler = practices => {
       if (practices === "economiza") {
         this.setState({
           mei: !this.state.economiza,
           welcome: false
          })
       }
       if (practices === "pratica2") {
         this.setState({
           pratica2: !this.state.pratica2,
           mei: false,
         });
       }
       if (practices === "pratica3") {
         this.setState({
           pratica3: !this.state.pratica3,
           pratica2: false,
         });
       }
       if (practices === "pratica4") {
         this.setState({
             pratica4: !this.state.pratica4,
             pratica3: false,
         });
      }
       if (practices === "pratica5") {
         this.setState({
           pratica5: !this.state.pratica5,
           pratica4: false,
         });
       }
   };
  
  render() {

    const mei = (this.state.mei || this.state.micro || this.state.media) && <Step1 />;
    const welcome = this.state.welcome && <Welcome />;
    // const industria = (this.state.industria || this.state.servicos || this.state.comercio) && <Step2 />;
    const pratica2 = this.state.pratica2 && <Step3/>;
    const pratica3 = this.state.pratica3 && <Step4/>;
    const pratica4 = this.state.pratica4 && <Step5/>;
    const pratica5 = this.state.pratica5 && <Step6/>;

    return (
      <div>
        <div className="container mt-5">
          <div className="d-flex justify-content-center">
            <div className="plate">
              <Base />
              {welcome}
              {mei}
              {/* {industria} */}
              {pratica2}
              {pratica3}
              {pratica4}
              {pratica5}
            </div>
          </div>
          <CustomChatbot eventHandler={this.clickEventHandler} />
        </div>
      </div>
    );
  }
}

export default Stairs;
