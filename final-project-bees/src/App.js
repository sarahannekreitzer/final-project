import React, { Component } from "react";

import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Table from "./components/Table";
import Chart from "./components/Chart";
import Colophon from "./components/Colophon";
// import Map from "./components/Map";

import "./App.css";

/**
 * param {any}
 */
class App extends Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <div>
        <Header />
        <Section1 />
        <Section2 />
        <Table />
        <Chart />
        <Colophon />
      </div>
    );
  }
}

export default App;
