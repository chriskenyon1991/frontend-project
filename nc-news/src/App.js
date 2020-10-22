import { Router } from '@reach/router';
import React from 'react';
import './App.css';
import Articles from './components/articles';
import Header from './components/header'
import SideBar from './components/sideBar'
// import Topics from './components/topics'

class App extends React.Component{


  render() {
    return <div className="App">
      <Header/>
      <SideBar/>
      <Router>
        <Articles path='/' />
        <Articles path='/articles/:article_id'/>
        <Articles path='/articles/topic/:slug'/>
        <Articles path='/articles/author/:username'/>
      </Router>
    
      </div>
  }
}

export default App;
