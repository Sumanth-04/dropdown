import React, { Component } from "react";
import { default as RcSteps } from "rc-steps";
import Button from "../Button/index";
import "./Step.scss";

class Steps extends Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      last: 0,
    };
    this.next = this.next.bind(this);
    this.submit = this.submit.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.setState({ current: this.state.current + 1 });
  }
  previous() {
    this.state.current === 0
      ? this.setState({ current: this.state.current })
      : this.setState({ current: this.state.current - 1 });
  }
  submit(e) {
    e.preventDefault();
    console.log("submit");
  }
  render() {
    var flag = this.props.onStepClick;
    var arrOfchildrenProps = [];
    for (let i = 0; i < this.props.children.length; i++) {
      arrOfchildrenProps[i] = this.props.children[i].props;
    }
    var last = arrOfchildrenProps.length;
    var divs = [];
    for (let i = 0; i < arrOfchildrenProps.length; i++) {
      divs.push(
        <RcSteps.Step
          key={i}
          title={arrOfchildrenProps[i].title}
          subTitle={arrOfchildrenProps[i].subTitle}
          onStepClick={
            flag
              ? () => {
                  this.setState({ current: i });
                }
              : undefined
          }
          description={
            this.state.current === i
              ? arrOfchildrenProps[i].description
                ? arrOfchildrenProps[i].description
                : arrOfchildrenProps[i].children
              : undefined
          }
        ></RcSteps.Step>
      );
    }

    if (last - 1 === this.state.current) {
      return (
        <div>
          <RcSteps current={this.state.current}>{divs}</RcSteps>
          <div style={{ paddingLeft: "20%",paddingTop:'25px' }}>
            <Button type="primary" size="small" onClick={this.props.submit}>
              Submit
            </Button>{" "}
            <Button type="secondary" size="small" onClick={this.previous}>
              Back
            </Button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <RcSteps current={this.state.current}>{divs}</RcSteps>
          <div style={{ paddingLeft: "20%" ,paddingTop:'25px' }}>
            <Button type="secondary" size="small" onClick={this.next}>
              Next
            </Button>{" "}
            <Button type="secondary" size="small" onClick={this.previous}>
              Back
            </Button>
          </div>
        </div>
      );
    }
  }
}

Steps.defaultProps = {
  onStepClick: true,
};

export default Steps;
