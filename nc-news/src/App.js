import { Router } from '@reach/router';
import React from 'react';
import './App.css';
import Articles from './components/articles';
import Header from './components/header'
// import Topics from './components/topics'

class App extends React.Component{

  state = {
    username:'guest',
    Articles: []
  }

  render() {
    return <div className="App">
      <Header/>
      {/* <Topics /> */}
      <Router>
        <Articles path='/' />
        <Articles path='/articles'/>
        
      </Router>

      </div>
  }
}

export default App;
