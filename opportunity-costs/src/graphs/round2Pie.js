import React, { Component } from "react";
import Chartjs from "chart.js";
import "./PieChartStyles.css";
const PieChart = require("react-chartjs").Pie;

// For more Styling Options: github.com/chartjs/Chart.js/blob/v1.1.1/docs/05-Pie-Doughnut-Chart.md
class RoundPieChart2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let chartData = [
      {
        value: this.props.round2No,
        color: "goldenrod",
        label: "Option #2"
      },
      {
        value: this.props.round2Yes,
        color: "rgb(97, 218, 251)",
        label: "Option #1"
      }
    ];
    // let chartOptions = [
    //   {
    //     borderColor: ["rgb(125,125,125)"]
    //   }
    // ];

    return (
      <div className="pie">
        <PieChart
          data={chartData}
          // options={chartOptions}
          width="900"
          height="375"
        />
      </div>
    );
  }
}
export default RoundPieChart2;
