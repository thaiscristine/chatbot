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
      //practices (TODO: FIX THIS MESS)
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
      //score
      score: 0
    };
  }

// store company category here
  clickEventHandler = category => {
    if (category === "mei") {
      this.setState({
        mei: !this.state.mei,
        score: this.state.score+1
      });
      console.log(this.state.zero);
    } else if (category === "micro") {
      this.setState({
        micro: !this.state.micro,
        score: this.state.score+1

      });
    } else {
      this.setState({
        media: !this.state.media,
        score: this.state.score+1

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
  //(TODO: FIX THIS MESS)
    clickEventHandler = practices => {
    if (practices === "economiza") {
      this.setState({
        mei: !this.state.economiza,

        score: this.state.score+1

      });
    } if (practices === "pratica2") {
      this.setState({
        pratica2: !this.state.pratica2,
        score: this.state.score+1

      });
          } if (practices === "pratica3") {
      this.setState({
        pratica3: !this.state.pratica3,
        score: this.state.score+1

      });    } if (practices === "pratica4") {
      this.setState({
        pratica4: !this.state.pratica4,
        score: this.state.score+1
      });

    } if (practices === "pratica5") {
      this.setState({
        pratica5: !this.state.pratica5,
        score: this.state.score+1
      });

          } if (practices === "pratica6") {
      this.setState({
        pratica6: !this.state.pratica2,
        score: this.state.score+1
      });
    } if (practices === "pratica7") {
      this.setState({
        pratica7: !this.state.pratica2,
        score: this.state.score+1
      });
    } if (practices === "pratica8") {
      this.setState({
        pratica8: !this.state.pratica2,
        score: this.state.score+1
      });
    } if (practices === "pratica9") {
      this.setState({
        pratica9: !this.state.pratica2,
        score: this.state.score+1
      });
    } if (practices === "pratica10") {
      this.setState({
        pratica10: !this.state.pratica2,
        score: this.state.score+1
      });
    } else {
      this.setState({
        zero: !this.state.zero
      });
    }
  };

  render() {
    const score = this.state.score;
    const zero = this.state.zero  && <Step0/>;
    const mei = this.state.mei && <Step0/>;
    const micro = this.state.micro && <Step0/>;
    const media = this.state.media && <Step0/>;
    const pratica2 = this.state.pratica2 && <Step2/>;
    const pratica3 = this.state.pratica3 && <Step3/>;
    const pratica4 = this.state.pratica4 && <Step4/>;
    const pratica5 = this.state.pratica5 && <Step5/>;


   /*doesn't do anything, ignore
 function SwitchCase(props) {

    switch(props.value) {

      case score===1: return <Step2/>;

      case score===2: return <Step3/>;

      case score===3: return <Step4/>;

      case score===4: return <Step5/>;

      case score===5: return <Step6/>;

      case score===6: return <Step6/>;

      case score===7: return <Step7/>;

      case score===8: return <Step8/>;

      case score===9: return <Step9/>;

      case score===10: return <Step10/>;

      default: return <Step0/>;

    }

  } */
    return (
      <div>
        <div className="container mt-5">
          <div className="d-flex justify-content-center">
            <div className="plate">
              <Base />
              {zero}
              {score}
              {mei}
              {micro}
              {media}
              {pratica2}
              {pratica3}
              {pratica4}
              {pratica5}
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
