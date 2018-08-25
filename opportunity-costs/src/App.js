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
        return this.setState({ round2Yes: initalRound2YesCount[0] });
      });

    let initalRound2NoCount = []; // placeholder to push data to out of query
    db.collection("rounds")
      .doc("round2No")
      .get()
      .then(query => {
        initalRound2NoCount.push(query.data().count);
      })
      .then(() => {
        return this.setState({ round2No: initalRound2NoCount[0] });
      });
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
      });
  };

  handleSubmitRound1No = () => {
    this.setState({
      round1No: (this.state.round1No += 1)
    });
    db.collection("rounds")
      .doc("round1No")
      .set({
        count: this.state.round1No
      });
  };

  handleSubmitRound2Yes = () => {
    this.setState({
      round2Yes: (this.state.round2Yes += 1)
    });
    db.collection("rounds")
      .doc("round2Yes")
      .set({
        count: this.state.round2Yes
      });
  };

  handleSubmitRound2No = () => {
    this.setState({
      round2No: (this.state.round2No += 1)
    });
    db.collection("rounds")
      .doc("round2No")
      .set({ count: this.state.round2No });
  };

  render() {
    return (
      <div className="App">
        <div className="background">
          <div className="slide landing">
            <i id="logo" className="fas fa-sun" />
            <h2 className="content">An Intuitive Understanding of Risks & Costs</h2>
          </div>
            <i className="fas fa-arrow-circle-down downArrow" />

          <div className="second">
            <div className='rainMatrix'>
              <div className='rainRow1'> 
                <i class="fas fa-tint drop"></i><i class="fas fa-tint drop0"></i>
                <i class="fas fa-tint drop"></i><i class="fas fa-tint drop"></i>
              </div>
              <div className='rainRow2'> 
                <i class="fas fa-tint drop0"></i><i class="fas fa-tint drop"></i>
                <i class="fas fa-tint drop0"></i><i class="fas fa-tint drop"></i>
              </div>
              <div className='rainRow1'> 
                <i class="fas fa-tint drop"></i><i class="fas fa-tint drop"></i>
                <i class="fas fa-tint drop"></i><i class="fas fa-tint drop0"></i>
              </div>
            </div>
            <div className='brelly'>&#9730;</div>
          
            <div className="text">
              You're probably already familiar with the financial concepts of
              risk and cost. Have you ever grabbed an umbrella before walking
              outside, just in case it rains? Maybe you decided to snack on some
              fruit instead of candy one afternoon, or walk instead of drive.
              These are examples of decisions we make at the margin which
              involve our assessment of various risks and costs.
            </div>
            <i className="fas fa-arrow-circle-down downArrow" />
          </div>

          <div className="third">
            <div className="text">
              It may be a bit clearer if we run through an example. For our
              first scenario, let's assume that you have two options. Select
              option one, and you receive $1. Select option two, and a coin is
              flipped: heads, you get $2; tails, you receive nothing! Which do
              you choose?
            </div>
            <div className="buttons">
              <button onClick={this.handleSubmitRound1Yes}>Option 1: $1</button>
              <button onClick={this.handleSubmitRound1No}>
                Option 2: Flip for $2
              </button>
            </div>
            <i className="fas fa-arrow-circle-down downArrow" />
          </div>

          <div className="fourth">
            <div className="text">
              Interesting choice! So far, there have been (tie to db)__ votes
              from all of the visitors to this site, and you can see the
              breakdown in our nifty pie chart below.
            </div>
            <div className="pie text"> Chart Placeholder</div>
            <div className="chartSubText">
              This is just a single data point, so let's do one more scenario
              and see if we can find some interesting correlations!
            </div>
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
