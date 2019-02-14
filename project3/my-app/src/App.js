import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import { Container, FormCollab, Input } from './components';

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      value: 'a',
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>

      <Container>
        <h1>oi</h1>
        <FormCollab>
          
        </FormCollab>
        <Input value={this.state.value} color={} onChange={this.handleChange} placeholder="não tem aqui? escreva ok :)" />

        {
          <p>{this.state.value}</p>
        }
      </Container>
    );
  }
}

export default App;
