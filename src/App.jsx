import "./App.css";
import React, { Component } from "react";
import Tasks from "./Components/OverviewClass";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To-Do App</h1>
          <Tasks />
        </header>
      </div>
    );
  }
}

export default App;