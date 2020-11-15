import React, { Component } from "react";
import "./Stairs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Base from "../base/Base";
import Step0 from "../step0/Step0";
import Step1 from "../step1/Step1";
import Step2 from "../step2/Step2";
import Step3 from "../step3/Step3";
import Step4 from "../step4/Step4";
import Step5 from "../step5/Step5";
import Step6 from "../step6/Step6";
import Step7 from "../step7/Step7";
import Step8 from "../step8/Step8";
import Step9 from "../step9/Step9";
import Step10 from "../step10/Step10";

import ButtonGroup from "../buttonGroup/ButtonGroup";

import CustomChatbot from "../chatbot/CustomChatbot";

class Stairs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zero: false,
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
      pratica6:false,
      pratica7:false,
      pratica8:false,
      pratica9:false,
      pratica10:false,
    };
  }

// store company category here
  clickEventHandler = category => {
    if (category === "mei") {
      this.setState({
        mei: !this.state.mei,
      });
      console.log(this.state.zero);
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
    //this quiz determines good financial health.
  //correct answer gives you one point,up to 10
  //scored stored separately
    clickEventHandler = practices => {
    if (practices === "economiza") {
      this.setState({
        mei: !this.state.economiza
      });
    } if (practices === "pratica2") {
      this.setState({
        pratica2: !this.state.pratica2
      });
          } if (practices === "pratica3") {
      this.setState({
        pratica3: !this.state.pratica3
      });    } if (practices === "pratica4") {
      this.setState({
        pratica4: !this.state.pratica4
      });
    } if (practices === "pratica5") {
      this.setState({
        pratica5: !this.state.pratica5
      });
          } if (practices === "pratica6") {
      this.setState({
        pratica6: !this.state.pratica2
      });
    } if (practices === "pratica7") {
      this.setState({
        pratica7: !this.state.pratica2
      });
    } if (practices === "pratica8") {
      this.setState({
        pratica8: !this.state.pratica2
      });
    } if (practices === "pratica9") {
      this.setState({
        pratica9: !this.state.pratica2
      });
    } if (practices === "pratica10") {
      this.setState({
        pratica10: !this.state.pratica2
      });
    } else {
      this.setState({
        zero: !this.state.zero
      });
    }
  };

  render() {
    const mei = this.state.mei && <Step1 />;
    const micro = this.state.micro && <Step1 />;
    const media = this.state.media && <Step1 />;
    const zero = this.state.zero  && <Step0/>;
    const score = 0;
    const pratica2 = this.state.pratica2 && <Step2/>;
    const pratica3 = this.state.pratica2 && <Step3/>;
    const pratica4 = this.state.pratica2 && <Step4/>;
    const pratica5 = this.state.pratica2 && <Step5/>;
    const pratica6 = this.state.pratica2 && <Step6/>;
    const pratica7 = this.state.pratica2 && <Step7/>;
    const pratica8 = this.state.pratica2 && <Step8/>;
    const pratica9 = this.state.pratica2 && <Step9/>;
    const pratica10 = this.state.pratica2 && <Step10/>;

    return (
      <div>
        <div className="container mt-5">
          <div className="d-flex justify-content-center">
            <div className="plate">
              <Base />
              {mei}
              {micro}
              {media}
              {zero}
              {pratica2}
              {pratica3}
              {pratica4}
              {pratica5}
              {pratica6}
              {pratica7}
              {pratica8}
              {pratica9}
              {pratica10}

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
