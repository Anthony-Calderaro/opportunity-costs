import React, { Component } from "react";
import firebase from "./firebase.js";
import "./App.css";
import PieChart from './graphs/round1Pie';
const db = firebase.firestore();

class App extends Component {
  constructor() {
    super();
    this.state = {
      round1Yes: 0,
      round1No: 0,
      round2Yes: 0,
      round2No: 0,
      total: 0,
    };
    this.handleSubmitRound1Yes = this.handleSubmitRound1Yes.bind(this);
    this.handleSubmitRound1No = this.handleSubmitRound1No.bind(this);
    this.handleSubmitRound2Yes = this.handleSubmitRound2Yes.bind(this);
    this.handleSubmitRound2No = this.handleSubmitRound2No.bind(this);
  }

  componentDidMount() {
    // Set the inital state with the data from the database upon inital load

    let initalRound1YesCount = []; // placeholder to push data to out of query
    db.collection("rounds")
      .doc("round1Yes")
      .get()
      .then(query => {
        initalRound1YesCount.push(query.data().count);
      })
      .then(() => {
        this.setState({ round1Yes: initalRound1YesCount[0] });
      });

    let initalRound1NoCount = []; // placeholder to push data to out of query
    db.collection("rounds")
      .doc("round1No")
      .get()
      .then(query => {
        initalRound1NoCount.push(query.data().count);
      })
      .then(() => {
        this.setState({ round1No: initalRound1NoCount[0] });
      });

    let initalRound2YesCount = []; // placeholder to push data to out of query
    db.collection("rounds")
      .doc("round2Yes")
      .get()
      .then(query => {
        initalRound2YesCount.push(query.data().count);
      })
      .then(() => {
        this.setState({ round2Yes: initalRound2YesCount[0] });
      });

    let initalRound2NoCount = []; // placeholder to push data to out of query
    db.collection("rounds")
      .doc("round2No")
      .get()
      .then(query => {
        initalRound2NoCount.push(query.data().count);
      })
      .then(() => {
        this.setState({ round2No: initalRound2NoCount[0] });
      })
  }

  // On Submit functions for each of the buttons
  handleSubmitRound1Yes = () => {
    this.setState({
      round1Yes: (this.state.round1Yes += 1)
    });
    db.collection("rounds")
      .doc("round1Yes")
      .set({
        count: this.state.round1Yes
      }).then(() => {
        let x = this.state.round1Yes + this.state.round1No + this.state.round2Yes + this.state.round2No;
        this.setState({
          total: x
        })
      })
  };

  handleSubmitRound1No = () => {
    this.setState({
      round1No: (this.state.round1No += 1)
    });
    db.collection("rounds")
      .doc("round1No")
      .set({
        count: this.state.round1No
      }).then(() => {
        let x = this.state.round1Yes + this.state.round1No + this.state.round2Yes + this.state.round2No;
        this.setState({
          total: x
        })
      })

  };

  handleSubmitRound2Yes = () => {
    this.setState({
      round2Yes: (this.state.round2Yes += 1)
    });
    db.collection("rounds")
      .doc("round2Yes")
      .set({
        count: this.state.round2Yes
      }).then(() => {
        let x = this.state.round1Yes + this.state.round1No + this.state.round2Yes + this.state.round2No;
        this.setState({
          total: x
        })
      })
  };

  handleSubmitRound2No = () => {
    this.setState({
      round2No: (this.state.round2No += 1)
    });
    db.collection("rounds")
      .doc("round2No")
      .set({ 
        count: this.state.round2No 
      }).then(() => {
        let x = this.state.round1Yes + this.state.round1No + this.state.round2Yes + this.state.round2No;
        this.setState({
          total: x
        })
      })
  };

  render() {
    return (
      <div className="App">
        <div className="background">
          <div className="slide landing">
            <i id="logo" className="fas fa-sun" />
            <h2 className="content">Understanding Risks & Costs Intuitively</h2>
          </div>
          <i className="fas fa-arrow-circle-down downArrow" />

          <div className="second">
            <div className="rainMatrix">
              <div className="rainRow1">
                <i class="fas fa-tint drop" />
                <i class="fas fa-tint drop2" />
                <i class="fas fa-tint drop2" />
                <i class="fas fa-tint drop0" />
              </div>
              <div className="rainRow2">
                <i class="fas fa-tint drop2" />
                <i class="fas fa-tint drop" />
                <i class="fas fa-tint drop0" />
                <i class="fas fa-tint drop2" />
              </div>
              <div className="rainRow1">
                <i class="fas fa-tint drop0" />
                <i class="fas fa-tint drop2" />
                <i class="fas fa-tint drop2" />
                <i class="fas fa-tint drop" />
              </div>
            </div>
            <div className="brelly">&#9730;</div>

            <div className="text">
              You're probably already familiar with the financial concepts of
              risk and cost. Have you ever looked outside when it wasn't
              raining, noticed it was overcast, and grabbed an umbrella before
              walking outside just in case? Have you ever been driving quickly
              around a bend, and slowed down just in case there was a speed trap
              out of view? These are examples of decisions we make at the margin
              which involve a basic understanding of risks and costs. No one
              necessarily teaches us these concepts, but through a combination
              of intuition and experience, we learn to make these assessments in
              real-time.
            </div>
          </div>
          <i className="fas fa-arrow-circle-down downArrow" />

          <div className="third">
            <div className="text">
              But what exactly is the different between a risk and a cost?
              Before diving into technical definitions, let's see if we can't
              highlight the difference with 2 quick scenarios. In our first example,
              let's assume that you have two options. Select option one, and you
              receive $1. Select option two, and a fair coin is flipped: heads, you
              get $2; tails, you get nothing! Which would you choose?
            </div>
            <div className="buttons">
              <button onClick={this.handleSubmitRound1Yes}>Option 1</button>
              <button onClick={this.handleSubmitRound1No}>Option 2</button>
            </div>
            <i className="fas fa-arrow-circle-down downArrow" />
          </div>

          <div className="fourth">
            <div className="text">
              Interesting choice! So far, there have been {this.state.total} votes
              from all of the visitors to this site, and you can see the
              breakdown in our nifty pie chart below.
            </div>

            <PieChart round1Yes={this.state.round1Yes} round1No={this.state.round1No} />
            
            <div className="text">
              This is just a single data point, so let's do one more scenario
              and see if we can find some interesting correlations!
            </div>
            <i className="fas fa-arrow-circle-down downArrow pieArrow" />

            <div className="text">
              Let's do the same scenario as above, but change the dollar
              amounts. If you select option 1, you receive $1 million. Select
              option 2, and we'll flip a coin: heads, you receive $2 million;
              tails, you receive nothing!
            </div>
            <div className="buttons">
              <button onClick={this.handleSubmitRound2Yes}>
                Option 1: $1 million
              </button>
              <button onClick={this.handleSubmitRound2No}>
                Option 2: Flip for $2 million
              </button>
            </div>
            <i className="fas fa-arrow-circle-down downArrow" />
          </div>

          <div className="fifth">
            <div className="text">
              Very interesting! Here's another breakdown of the options from
              each scenario:
            </div>
            <div className="pie text"> Chart Placeholder</div>
            <div className="chartSubText">
              What's particularly interesting is the breakout between people who
              selected option #2 in the first scenario, and option #1 in the
              second. Why do you think this is?
            </div>
            <div className="text">
              Remember when I said people understand things like risk and cost
              intuitively? This is another example showcasing that! The first
              option had immaterial amounts - $1 and $2. Because the amounts are
              low, the cost associated with choosing the second option is low,
              and so most people tend to want to try to earn more of an
              immaterial amount, because they aren't worried about losing it -
              it's immaterial. But when the amounts become material - say, $1
              million or $2 million - the opportunity costs of choosing the
              second option is $1 million! Even though both scenarios have the
              same risk percentage and rate of return, people will make a
              different selection based on the nominal costs of each investment.
            </div>
            <div className="text">
              The main point of this is to show that we intuitively analyze
              risk, return, and cost when making decisions, and yet modern
              investmentors still emphasize rate of return, without giving as
              much consideration to the costs or risks of the portfolio. I
              developed another application called
              <span className="ray">Ray</span>, which helps investors compare
              the risk-adjusted yield of individual investments.
            </div>
          </div>
          <div className="footer">
            Made with <span>&#9752;</span> by <span>Lucky Labs</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
