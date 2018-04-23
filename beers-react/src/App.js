import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'
import Title from './components/title'
import SearchWithRouter from './components/search'
import Results from './components/results'
import './App.css';

class App extends Component {
  

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Title />
          <SearchWithRouter />
          <Route path="/list/:query" component={Results}  />
          
        </div>
        </HashRouter>
        );
  }
}
export default App;











