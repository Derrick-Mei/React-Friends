import React, { Component } from 'react';
import { people } from './people';
import PeopleList from './PeopleList'
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
    }
  }
  componentWillMount(){
    this.setState({ people: people });
    //console.log("peopleArr: ", people)
  }

  render() {
    console.log("App.js State: ",this.state);
    // console.log("App.js State: ",this.state.peopleArr[0]);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Derrick's Friend List</h1>
        </header>
        <PeopleList people={this.state.people}/>
        <div></div>


        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
