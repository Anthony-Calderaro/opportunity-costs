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
      round2No: 0,
    };
    this.handleSubmitRound1Yes = this.handleSubmitRound1Yes.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmitRound1No = this.handleSubmitRound1No.bind(this);
    this.handleSubmitRound2Yes = this.handleSubmitRound2Yes.bind(this);
    this.handleSubmitRound2No = this.handleSubmitRound2No.bind(this);
  }

  // handleChange(e) {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }

  handleSubmitRound1Yes(e) {
    e.preventDefault(); 
    // console.log('inside handlesubmitr1Y')
    console.log(this.state.round1Yes) //before vote
    this.setState({ round1Yes: this.state.round1Yes += 1});
    console.log(this.state.round1Yes) // after vote
  }
  handleSubmitRound1No(e) {
    e.preventDefault(); 
    // console.log('inside handlesubmitr1Y')
    console.log(this.state.round1No) //before vote
    this.setState({ round1No: this.state.round1No += 1});
    console.log(this.state.round1No) // after vote
  }
  handleSubmitRound2Yes(e) {
    e.preventDefault(); 
    // console.log('inside handlesubmitr1Y')
    console.log(this.state.round2Yes) //before vote
    this.setState({ round2Yes: this.state.round2Yes += 1});
    console.log(this.state.round2Yes) // after vote
  }
  handleSubmitRound2No(e) {
    e.preventDefault(); 
    // console.log('inside handlesubmitr1Y')
    console.log(this.state.round2No) //before vote
    this.setState({ round2No: this.state.round2No += 1});
    console.log(this.state.round2No) // after vote
  }

  // add this to work right before component unmounts?
  // db.collection("rounds").doc("round1").set({
  //   count: this.state.round1Yes
  // });
  componentDidMount() {
    let w = [];
    db.collection("rounds")
      .doc("round1Yes")
      .get()
      .then(function(query) {
        w.push(query.data().count);
      })
      .then(data => {
        this.setState({ round1Yes: w[0] })
        console.log(this.state.round1Yes);
      })
      
    let x = [];
    db.collection("rounds")
      .doc("round1No")
      .get()
      .then(function(query) {
        x.push(query.data().count);
      })
      .then(data => {
        this.setState({ round1No: x[0] })
        console.log(this.state.round1No);
      })
      
    let y = [];
    db.collection("rounds")
      .doc("round2Yes")
      .get()
      .then(function(query) {
        y.push(query.data().count);
      })
      .then(data => {
        this.setState({ round2Yes: y[0] })
        console.log(this.state.round2Yes);
      })
      
    let z = [];
    db.collection("rounds")
      .doc("round2No")
      .get()
      .then(function(query) {
        z.push(query.data().count);
      })
      .then(data => {
        this.setState({ round2No: z[0] })
        console.log(this.state.round2No);
      })
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
        <button onClick={this.handleSubmitRound1Yes}>Round 1: Yes</button>
        <button onClick={this.handleSubmitRound1No}>Round 1: No</button>
        <button onClick={this.handleSubmitRound2Yes}>Round 2: Yes</button>
        <button onClick={this.handleSubmitRound2No}>Round 2: No</button>
    
      </div>
    );
  }
}

export default App;
