import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Widgets from "fusioncharts/fusioncharts.widgets";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

class Blood_Pressure extends Component {

  state = {
    blood_pressure: ""
  };

  componentDidMount() {
    const device_id = "P348";
    const sensor_id = "T349";

    
    fetch(
      `https://api.waziup.io/api/v2/devices/${device_id}/sensors/${sensor_id}`
    )
      .then(res => res.json())
      .then(data => this.setState({blood_pressure: data.value.value}))
      .catch(console.log);
  }

  render() {

    const chartData = {
      chart: {
        caption: "Blood_Pressure Gauge",
        lowerLimit: "0",
        upperLimit: "100",
        showValue: "1",
        numberSuffix: "mm Hg",
        theme: "fusion",
        showToolTip: "0"
      },
      colorRange: {
        color: [
          {
            minValue: "0",
            maxValue: "50",
            code: "#F2726F"
          },
          {
            minValue: "50",
            maxValue: "75",
            code: "#FFC533"
          },
          {
            minValue: "75",
            maxValue: "100",
            code: "#62B58F"
          }
        ]
      },
      dials: {
        dial: [
          {
            value: `${this.state.humidity}%`
          }
        ]
      }
    };

    const chartConfigs = {
      type: "angulargauge",
      width: "100%",
      height: 400,
      dataFormat: "json",
      dataSource: chartData
    };

    return (
      <ReactFC {...chartConfigs} />
    );
  }

}

export default Blood_Pressure;