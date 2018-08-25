import React, { Component } from "react";
import firebase from "./firebase.js";
import "./App.css";
import PieChart from "./graphs/round1Pie";
import PieChart2 from "./graphs/round2Pie";
const db = firebase.firestore();

class App extends Component {
  constructor() {
    super();
    this.state = {
      round1Yes: 0,
      round1No: 0,
      round2Yes: 0,
      round2No: 0,
      total: 0
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
      })
      .then(() => {
        let x =
          this.state.round1Yes +
          this.state.round1No +
          this.state.round2Yes +
          this.state.round2No;
        this.setState({
          total: x
        });
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
      })
      .then(() => {
        let x =
          this.state.round1Yes +
          this.state.round1No +
          this.state.round2Yes +
          this.state.round2No;
        this.setState({
          total: x
        });
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
      })
      .then(() => {
        let x =
          this.state.round1Yes +
          this.state.round1No +
          this.state.round2Yes +
          this.state.round2No;
        this.setState({
          total: x
        });
      });
  };

  handleSubmitRound2No = () => {
    this.setState({
      round2No: (this.state.round2No += 1)
    });
    db.collection("rounds")
      .doc("round2No")
      .set({
        count: this.state.round2No
      })
      .then(() => {
        let x =
          this.state.round1Yes +
          this.state.round1No +
          this.state.round2Yes +
          this.state.round2No;
        this.setState({
          total: x
        });
      });
  };

  render() {
    return (
      <div className="App">
        <div className="background">
          <div className="slide landing">
            <i id="logo" className="fas fa-sun" />
            <h2 className="content">
              A Brief Introduction To Risks, Returns, & Costs
            </h2>
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
              highlight the difference with 2 quick scenarios. In our first
              example, let's assume that you have two options. Select option
              one, and you receive $1. Select option two, and a fair coin is
              flipped: heads, you get $2; tails, you get nothing! Which would
              you choose?
            </div>
            <div className="buttons">
              <button onClick={this.handleSubmitRound1Yes}>Option 1</button>
              <button className="b2" onClick={this.handleSubmitRound1No}>
                Option 2
              </button>
            </div>
            <i className="fas fa-arrow-circle-down downArrow lower" />
          </div>

          <div className="fourth">
            <div className="text">
              Interesting choice! So far, there have been {this.state.total}{" "}
              votes from all of the visitors to this site, and you can see the
              breakdown in our nifty pie chart below.
            </div>

            <PieChart
              round1Yes={this.state.round1Yes}
              round1No={this.state.round1No}
            />

            <div className="text">
              This is just a single data point, so let's do one more scenario
              and see if we can find some interesting correlations!
            </div>
            <i className="fas fa-arrow-circle-down downArrow pieArrow" />

            <div className="text round2">
              Let's take the same scenario as above, but change the dollar
              amounts. If you select option 1, you get $1 million. Select option
              2, and we'll flip a fair coin: heads, you get $2 million; tails,
              you get nothing!
            </div>
            <div className="buttons">
              <button onClick={this.handleSubmitRound2Yes}>Option 1</button>
              <button className="b2" onClick={this.handleSubmitRound2No}>
                Option 2
              </button>
            </div>
          </div>
          <i className="fas fa-arrow-circle-down downArrow lower" />

          <div className="fifth">
            <div className="text">
              Interesting pick! Here's another breakdown of the options from
              each scenario:
            </div>

            <PieChart2
              round2Yes={this.state.round2Yes}
              round2No={this.state.round2No}
            />

            <div className="text break">
              What's particularly interesting is that a larger portion of
              individuals chose to flip a coin for $2, but when the potential
              winnings jumped to $2 million, fewer selected that option. Why do
              you think this is?
            </div>
            <i className="fas fa-arrow-circle-down downArrow higher" />
            <div className="text">
              Remember when I mentioned people understand things like risk and
              cost intuitively? This is another example showcasing that! The
              first option had immaterial amounts - $1 and $2. Because the
              amounts are negligible, the cost associated with accepting the
              risk of the second option is negligible, and people would tend to
              go for a higher return when the actual cost is lower. But when the
              amounts become material - say, $1 million or $2 million - the
              opportunity costs of choosing the second option is a guarenteed $1
              million, which as of 2018 is a reasonably large sum of money!
              You probably noticed that both scenarios have the exact same risk
              percentage (100% for option 1, 50% for option 2) and the exact same
              expected return ($1 or $1 million), and yet people still made different
              selections based on the actual costs of each decision.
            </div>
            <div className="text">
              The main point of this is to show that we intuitively analyze
              risk, return, and cost when making decisions. Unfortunately, modern
              portfolio managers will still emphasize metrics like "rate of return" or ", without giving as
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
