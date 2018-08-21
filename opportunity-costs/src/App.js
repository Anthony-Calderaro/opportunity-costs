import React, { Component } from 'react';
import firebase from './firebase.js';
import './App.css';
const db = firebase.firestore();

class App extends Component {
  constructor() {
    super();
    this.state = {
      round1yes: '',
      round1no: '',
      round2yes: '',
      round2no: '',
      rounds: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    db.collection('rounds').doc('round1Yes').set() // fix
    db.collection('rounds').doc('round1No').set() // fix
    db.collection('rounds').doc('round2Yes').set() // fix
    db.collection('rounds').doc('round2No').set() // fix
  }

  componentDidMount() {
    let w;
    let x;
    let y;
    let z;
    
    db.collection('rounds').doc('round1')
    .get()
    .then(function(doc) {
        console.log(doc.data());
      })


    db.collection('rounds').doc('round2')
    .get()
    .then(function(doc) {
        console.log(doc.data());
      })

      
    // .then(data => this.setState({
    //   round1yes: w,
    //   round1no: x,
    //   round2yes: y,
    //   round2no: z
    // }));
    
  }

  render() {
    return (
      <div className="App">

        <h3>Display</h3>
        <div>Round 1 yes: {this.state.round1yes}</div>
        <div>Round 1 no: {this.state.round1no}</div>
        <div>Round 2 yes: {this.state.round2yes}</div>
        <div>Round 2 no: {this.state.round2no}</div>

      </div>
    );
  }
}

export default App;
