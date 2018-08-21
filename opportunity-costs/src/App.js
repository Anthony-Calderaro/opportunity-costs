import React, { Component } from "react";
import firebase from "./firebase.js";
import "./App.css";
const db = firebase.firestore();

class App extends Component {
  constructor() {
    super();
    this.state = {
      round1Yes: 0,
      round1No: 0,
      round2Yes: 0,
      round2No: 0
    };
    this.handleSubmitRound1Yes = this.handleSubmitRound1Yes.bind(this);
    this.handleSubmitRound1No = this.handleSubmitRound1No.bind(this);
    this.handleSubmitRound2Yes = this.handleSubmitRound2Yes.bind(this);
    this.handleSubmitRound2No = this.handleSubmitRound2No.bind(this);
  }

  componentDidMount() {
    console.log("1", this.state.round2Yes);
    let initalRound1YesCount = [];
    db.collection("rounds")
      .doc("round1Yes")
      .get()
      .then(function(query) {
        initalRound1YesCount.push(query.data().count);
      })
      .then(data => {
        console.log("3", this.state.round2Yes);
        return this.setState({ round1Yes: initalRound1YesCount[0] });
      });
    console.log("4", this.state.round2Yes);
    let initalRound1NoCount = [];
    db.collection("rounds")
      .doc("round1No")
      .get()
      .then(function(query) {
        initalRound1NoCount.push(query.data().count);
      })
      .then(data => {
        console.log("6", this.state.round2Yes);
        return this.setState({ round1No: initalRound1NoCount[0] });
      });

    let initalRound2YesCount = [];
    db.collection("rounds")
      .doc("round2Yes")
      .get()
      .then(function(query) {
        initalRound2YesCount.push(query.data().count);
        console.log(initalRound2YesCount);
      })
      .then(data => {
        return this.setState({ round2Yes: initalRound2YesCount[0] });
      });
    console.log("8", this.state.round2Yes);
    let initalRound2NoCount = [];
    db.collection("rounds")
      .doc("round2No")
      .get()
      .then(function(query) {
        initalRound2NoCount.push(query.data().count);
        console.log("9", initalRound2NoCount);
      })
      .then(data => {
        console.log("10", this.state.round2Yes);
        return this.setState({ round2No: initalRound2NoCount[0] });
      });
  }

  handleSubmitRound1Yes(e) {
    e.preventDefault();
    console.log("12", this.state.round2Yes);
    // console.log(this.state.round1Yes) //before vote
    this.setState({ round1Yes: this.state.round1Yes += 1 });
    // console.log(this.state.round1Yes) // after vote
  }

  handleSubmitRound1No(e) {
    e.preventDefault();
    console.log("13", this.state.round2Yes);
    // console.log(this.state.round1No) //before vote
    this.setState({ round1No: this.state.round1No += 1 });
    // console.log(this.state.round1No) // after vote
  }

  handleSubmitRound2Yes(e) {
    e.preventDefault();
    console.log("14", this.state.round2Yes);
    // console.log(this.state.round2Yes) //before vote
    this.setState({ round2Yes: this.state.round2Yes += 1 });
    // console.log(this.state.round2Yes) // after vote
  }

  handleSubmitRound2No(e) {
    e.preventDefault();
    console.log("15", this.state.round2Yes);
    // console.log(this.state.round2No) //before vote
    this.setState({ round2No: this.state.round2No += 1 });
    // console.log(this.state.round2No) // after vote
  }

  // add this to work right before component unmounts?
  // db.collection("rounds").doc("round1").set({
  //   count: this.state.round1Yes
  // });

  componentDidUpdate() {
    db.collection("rounds")
      .doc("round1Yes")
      .set({ count: this.state.round1Yes });
    console.log("16", this.state.round2Yes);
    db.collection("rounds")
      .doc("round1No")
      .set({ count: this.state.round1No });
    console.log("17", this.state.round2Yes);
    db.collection("rounds")
      .doc("round2Yes")
      .set({ count: this.state.round2Yes });
    console.log("18", this.state.round2Yes);
    db.collection("rounds")
      .doc("round2No")
      .set({ count: this.state.round2No });
    console.log("19", this.state.round2Yes);
  }

  render() {
    return (
      <div className="App">
        <div className="slide landing">
          <i id="logo" className="fas fa-sun" />
          <h2 className="content">
            Shine some light on financial risk and return
          </h2>
          <i className="fas fa-arrow-circle-down landingi" />
        </div>

        <h3>Display</h3>
        <button onClick={this.handleSubmitRound1Yes}>Round 1: Yes</button>
        <button onClick={this.handleSubmitRound1No}>Round 1: No</button>
        <button onClick={this.handleSubmitRound2Yes}>Round 2: Yes</button>
        <button onClick={this.handleSubmitRound2No}>Round 2: No</button>

        <div>Sample</div>
      </div>
    );
  }
}

export default App;
