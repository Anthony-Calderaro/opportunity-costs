import React, { Component } from "react";
import firebase from "./firebase.js";
import "./App.css";
const db = firebase.firestore();

class App extends Component {
  constructor() {
    super();
    this.state = {
      round1yes: "",
      round1no: "",
      round2yes: "",
      round2no: "",
      rounds: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitRound1Yes = this.handleSubmitRound1Yes.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmitRound1Yes(e) {
    e.preventDefault(); //.where("yes", "==", true);
    db.collection("rounds").doc("round1").get().then(function(doc) {
      console.log(doc.data())
    })
    // db.collection("rounds")
    //   .doc("round1Yes")
    //   .set(); // fix
  }

  handleSubmitRound1No(e) {
    db.collection("rounds")
      .doc("round1No")
      .set(); // fix
  }

  handleSubmitRound2Yes(e) {
    db.collection("rounds")
      .doc("round2Yes")
      .set(); // fix
  }

  handleSubmitRound2No(e) {
    db.collection("rounds")
      .doc("round2No")
      .set(); // fix
  }

  componentDidMount() {
    let w;
    let x;
    let y;
    let z;

    db.collection("rounds")
      .doc("round1")
      .get()
      .then(function(doc) {
        console.log(doc.data());
      });

    db.collection("rounds")
      .doc("round2")
      .get()
      .then(function(doc) {
        console.log(doc.data());
      });
  }

  render() {
    return (
      <div className="App">
        <div className="slide landing">
          <i id="logo" class="fas fa-sun" />
          <h2 className="content">
            Shine some light on financial risk and return
          </h2>
          <i className="fas fa-arrow-circle-down landingi" />
        </div>

        <h3>Display</h3>
        <button onSubmit={this.handleSubmitRound1Yes}>Round 1: Yes</button>
        <button>Round 2: No</button>

        <div>Round 1 yes: {this.state.round1yes}</div>
        <div>Round 1 no: {this.state.round1no}</div>
        <div>Round 2 yes: {this.state.round2yes}</div>
        <div>Round 2 no: {this.state.round2no}</div>
      </div>
    );
  }
}

export default App;
