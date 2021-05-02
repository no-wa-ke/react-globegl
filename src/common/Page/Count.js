import React, { Component } from 'react';
import timezz from "timezz";

class Count extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      data: ["a", "a", "a"]
    };
  }
  componentDidMount() {
    let els = document.querySelector(".timer1").querySelectorAll(".seconds").innerHTML;
    let els2 = document.querySelectorAll(".seconds");
    console.info("-------------beforeUpdateState------------");
    console.info(els);
    console.warn(els2);

    this.setState({
      data: ["a", "b", "c", "d"]
    });

    els

  }
  render() {

    timezz(".timer1", {
      date: "July 16, 2017 00:00:00",
      canContinue: true,
      update(event) {
        // els[0]= event.seconds === 1 ? "second" : "seconds";
        // document.querySelector(".timer1").querySelector(".seconds").innerHTML =
        // event.seconds === 1 ? "second" : "seconds";
      }
    });

    return (
       
        <div className="timer1">
          Stroke 2017.06.17
          <div></div>
          Days
          <div data-days></div>
          Hours
          <div data-hours></div>
          Minutes
          <div data-minutes></div>
          <span class="seconds">Seconds</span>
          <div data-seconds></div>
        </div>
    
    );
  }
}




export default Count;