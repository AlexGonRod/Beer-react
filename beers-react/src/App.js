import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'
import SearchWithRouter from './components/search'
import ResultsWithRouter from './components/results'
import Title from './components/title'
import Card from './components/card'
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Title />
          <Route exact path="/" component={SearchWithRouter} />
          <Route path="/search/:query" component={ResultsWithRouter} />
          <Route path="/beer/:id" component={Card} />
        </div>
      </HashRouter>
    );
  }
}
export default App;











