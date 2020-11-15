import React, { Component } from "react";
import "./Stairs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Base from "../base/Base";
import Step1 from "../step1/Step1";
import Step2 from "../step2/Step2";
import Step3 from "../step3/Step3";
import Step4 from "../step4/Step4";
import ButtonGroup from "../buttonGroup/ButtonGroup";

import CustomChatbot from "../chatbot/CustomChatbot";

class Stairs extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

    };
  }
// store company category here
  clickEventHandler = category => {
    if (category === "mei") {
      this.setState({
        mei: !this.state.mei
      });
    } else if (category === "micro") {
      this.setState({
        micro: !this.state.micro
      });
    } else {
      this.setState({
        media: !this.state.media
      });
    }
  };
  //store company segment here
    clickEventHandler = segment => {
    if (segment === "comercio") {
      this.setState({
        mei: !this.state.comercio
      });
    } else if (segment === "industria") {
      this.setState({
        micro: !this.state.industria

      });
    } else {
      this.setState({
        media: !this.state.servicos
      });
    }
  };
    //the quiz that determines good financial health.
  //correct answer will fill up one bar
    clickEventHandler = practices => {
    if (practices === "economiza") {
      this.setState({
        mei: !this.state.economiza
      });
    } else if (practices === "micro") {
      this.setState({
        micro: !this.state.micro
      });
    } else {
      this.setState({
        media: !this.state.media
      });
    }
  };



  render() {
    const mei = this.state.mei && <Step1 />;
    const micro = this.state.micro && <Step2 />;
    const corn = this.state.corn && <Step3 />;
    const media = this.state.media && <Step4 />;

    return (
      <div>
        <div className="container mt-5">
          <div className="d-flex justify-content-center">
            <div className="plate">
              <Base />
              {mei}
              {micro}
              {corn}
              {media}
            </div>
          </div>
          <ButtonGroup eventHandler={this.clickEventHandler} />

          <CustomChatbot eventHandler={this.clickEventHandler} />
        </div>
      </div>
    );
  }
}

export default Stairs;
