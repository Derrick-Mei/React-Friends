import React, { Component } from 'react';
import PeopleList from './PeopleList'
import './App.css';
import { people } from './people';

class App extends Component {
  constructor(){
    super();
    this.state = {
      peopleArr:people,
    }
  }
  render() {
    // console.log("App.js State: ",this.state);
    // console.log("App.js State: ",this.state.peopleArr[0]);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Derrick's Friend List</h1>
        </header>
        <PeopleList appState={this.state.peopleArr[0]}/>
        <div></div>


        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
