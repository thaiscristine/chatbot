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
      tomato: false,
      mushroom: false,
      veggie: false,
      corn: false
    };
  }

  clickEventHandler = decision => {
    if (decision === "tomato") {
      this.setState({
        tomato: !this.state.tomato
      });
    } else if (decision === "mushroom") {
      this.setState({
        mushroom: !this.state.mushroom
      });
    } else if (decision === "corn") {
      this.setState({
        corn: !this.state.corn
      });
    } else {
      this.setState({
        veggie: !this.state.veggie
      });
    }
  };

  render() {
    const tomato = this.state.tomato && <Step1 />;
    const mushroom = this.state.mushroom && <Step2 />;
    const corn = this.state.corn && <Step3 />;
    const veggie = this.state.veggie && <Step4 />;

    return (
      <div>
        <div className="container mt-5">
          <div className="d-flex justify-content-center">
            <div className="plate">
              <Base />
              {tomato}
              {mushroom}
              {corn}
              {veggie}
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
