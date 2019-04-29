import React, { Component } from 'react';

import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Table from "./components/Table";

import "./App.css";

class App extends Component {
render() {
  return (
  <div>
    
    <Header />
    <Section1 />
    <Section2 />
    <Table />
  </div>
  );
}

}

export default App;
