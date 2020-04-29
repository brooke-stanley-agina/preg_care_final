import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Widgets from "fusioncharts/fusioncharts.widgets";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import Temperature from "./Temperature";
import Humidity from "./Humidity";
import Pulse from "./Pulse";
import Blood_Pressure from "./Blood_Pressure"


ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

class App extends Component {
  

  render() {
    

    return (
      <>
        <header>
          <div className="collapse bg-dark" id="navbarHeader">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-md-7 py-4">
                  <h4 className="text-white">About</h4>
                  <p className="text-muted">
                    Add some information about the album below, the author, or
                    any other background context. Make it a few sentences long
                    so folks can pick up some informative tidbits. Then, link
                    them off to some social networking sites or contact
                    information.
                  </p>
                </div>
                <div className="col-sm-4 offset-md-1 py-4">
                  <h4 className="text-white">Contact</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="text-white">
                        Follow on Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white">
                        Like on Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white">
                        Email me
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container d-flex justify-content-between">
              <a href="#" className="navbar-brand d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  aria-hidden="true"
                  className="mr-2"
                  viewBox="0 0 24 24"
                  focusable="false"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
                <strong>Preg Care</strong>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarHeader"
                aria-controls="navbarHeader"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </header>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4 shadow-sm">
                  <Temperature />
                </div>
              </div>

              <div className="col-md-6">
                <div className="card mb-4 shadow-sm">
                  <Blood_Pressure />
                </div>
              </div>
              <div className="col-md-6">
              <div className="card mb-4 shadow-sm">
                < Pulse/>
              </div>
            </div>
            <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
              <Humidity />
            </div>
          </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;


