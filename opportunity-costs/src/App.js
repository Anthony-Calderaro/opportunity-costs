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
          this.state.round1No 
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
          <a href="#down" className="fas fa-arrow-circle-down downArrow" />

          <div id="down"> </div>
          <div className="second">
            <div className="rainMatrix">
              <div className="rainRow1">
                <i class="fas fa-tint drop" /><i class="fas fa-tint drop2" /><i class="fas fa-tint drop2" /><i class="fas fa-tint drop0" />
              </div>
              <div className="rainRow2">
                <i class="fas fa-tint drop2" /><i class="fas fa-tint drop" /><i class="fas fa-tint drop0" /><i class="fas fa-tint drop2" />
              </div>
              <div className="rainRow1">
                <i class="fas fa-tint drop0" /><i class="fas fa-tint drop2" /><i class="fas fa-tint drop2" /><i class="fas fa-tint drop" />
              </div>
            </div>
            <div className="brelly">&#9730;</div>

            <div className="text">
              You're probably already familiar with the financial concepts of
              risks, returns, and costs, but they exist in non-financial domains as well. Have you ever looked outside when it wasn't
              raining, noticed it was overcast, and grabbed an umbrella before
              walking outside just in case? Have you ever been driving quickly
              around a bend, and slowed down just in case there was a speed trap
              around the corner? These are examples of decisions we make
              which involve a basic understanding of these concepts. No one
              necessarily taught them to us in a formal setting, but through a combination
              of intuition and experience, we learn to make these assessments in
              real-time.
            </div>
          </div>
          <a href="#down2" className="fas fa-arrow-circle-down downArrow" />

          <div id="down2"> </div>
          <div className="third">
            <div className="text">
              But what exactly is the different between a risk and a cost?
              Before diving into technical definitions, let's see if we can't
              highlight the difference with 2 quick examples. In our first
              example, let's assume that you have two options. Select option
              one, and you receive $1. Select option two, and a fair coin is
              flipped: heads, you get $2; tails, you get nothing. Which would
              you choose?
            </div>
            <div className="buttons">
              <button onClick={this.handleSubmitRound1Yes}>Option 1</button>
              <button className="b2" onClick={this.handleSubmitRound1No}>
                Option 2
              </button>
            </div>
            <a href="#down3" className="fas fa-arrow-circle-down downArrow lower" />
          </div>

          <div id="down3"> </div>
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

            <div className="text sub">
              A single data point isn't very insightful...so let's do one more!
            </div>
            <a href="#down4" className="fas fa-arrow-circle-down downArrow pieArrow" />

            <div id="down4"> </div>
            <div className="text round2">
              Let's take the same scenario as above, but change the dollar
              amounts. If you select option 1, you get $1 million. Select option
              2, and we'll flip a fair coin: heads, you get $2 million; tails,
              you get nothing!
            </div>
            <div className="buttons">
              <button onClick={this.handleSubmitRound2Yes}>Option 1</button>
              <button className="b2" onClick={this.handleSubmitRound2No}>Option 2</button>
            </div>
          </div>
          <a href="#down5" className="fas fa-arrow-circle-down downArrow lower" />

          <div id="down5"> </div>
          <div className="fifth">
            <div className="text">
              Interesting pick! Here's another breakdown of the options from
              each scenario:
            </div>

            <PieChart2 round2Yes={this.state.round2Yes} round2No={this.state.round2No} />

            <div className="text break">
              What's particularly interesting is that a larger portion of
              individuals chose to flip a coin for $2, but when the potential
              winnings jumped to $2 million, fewer selected that option. Why do
              you think this is?
            </div>
            {/* <i className="fas fa-arrow-circle-down downArrow higher" />
            
            <div> </div>
            <div> </div>
            <div> </div>
            <div> </div> */}
            <div className="text">
              Remember when I mentioned people understand things like risk and
              cost intuitively? This is another example showcasing that! The
              first option had immaterial amounts - 1 or 2 dollars isn't really going to break the bank. Because the
              amounts are negligible, the cost associated with accepting the
              risk of the second option is also negligible, and people may tend to
              go for a higher return when the actual cost is lower. But when the
              amounts become material - such as in the second example where $1 million was on the line - the
              opportunity costs of choosing the second option is a guarenteed $1
              million! (Which is a ton of money for most people in 2018). You
              probably noticed that in each example, the expected return was the same, and the risk of choosing option 2 was the same percentage. Despite this, some people who were risk-seeking in example 1 became risk-averse in example 2. One possible explanation for this could be
              that the actual costs of each decision were different - the cost of option 2 in the first example was $1. In the second example, the cost of option 2 was $1 million. This isn't
              an exact science, but it's an insightful exercise nonetheless!
            </div>
            <div className="text">
              The main point of this is to show that we intuitively understand
              and are capable of analyzing risks, returns, and costs when making
              personal and financial decisions. In the financial world, there
              seems to be a tendency for portfolio managers to emphasize metrics
              like rate of return without considering the costs or risks of
              comprable investments, which is misleading at best since it exposes their clients to uncessesary risk and cost. I'm in the process of
              developing an application called {""}
              <a target="#_blank" href="" className="ray">Ray</a>, which will hopefully help investors compare
              the risk-adjusted rate of return on various publicly traded investments.
              {/* Feel free to try it out - oh, and it's 100% free! */}
            </div>
          <div className="footer">Made with <span className='shamrock'>&#9752;</span> by Anthony {/*from <span>Lucky Labs</span>*/} </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
