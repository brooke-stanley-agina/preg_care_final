import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Widgets from "fusioncharts/fusioncharts.widgets";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

class Pulse extends Component {

  state = {
    pulse: ""
  };

  componentDidMount() {
    const device_id = "P343";
    const sensor_id = "T347";

    
    fetch(
      `https://api.waziup.io/api/v2/devices/${device_id}/sensors/${sensor_id}`
    )
      .then(res => res.json())
      .then(data => this.setState({pulse: data.value.value}))
      .catch(console.log);
  }

  render() {

    const chartData = {
      chart: {
        caption: "Pulse Gauge",
        lowerLimit: "0",
        upperLimit: "100",
        showValue: "1",
        numberSuffix: "Pulse / minute",
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

export default Pulse;