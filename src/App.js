import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      date: "",
      name: ""
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <div className="card">
        <Nav num={this.state.number} delai={this.state.date} nom={this.state.name} />
        </div>
        <div className="inputs">
          <input type="text" name="number" id="number" maxlength="16" placeholder='Card number' onChange={this.handleChange}></input><br />
          <input type="text" name="date" id="date" maxlength="4" placeholder='Valid thru' onChange={this.handleChange}></input><br />
          <input type="text" name="name" id="name" maxlength="20" placeholder='Card holder' onChange={this.handleChange}></input>
        </div>

      </div>
    );
  }
}

export default App;
