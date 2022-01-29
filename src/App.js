import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default class App extends Component {
  
  apiKey = process.env.REACT_APP_NEWS_API
  state ={
    progress:0,
   
  }
  setProgress = (progress) =>{
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
    <div>
      <Router>
          <Navbar/>
          <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          height = '3'
          />
          <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key="default" category="general" pageSize ={24} />} />
            <Route path="/general" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key="general" category="general" pageSize ={24} />} />
            <Route path="/business" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key="business" category="business" pageSize ={24} />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key="entertainment" category="entertainment" pageSize ={24} />} />
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key="health" category="health" pageSize ={24} />} />
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key="science" category="science" pageSize ={24} />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key="sports" category="sports" pageSize ={24} />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key="technology" category="technology" pageSize ={24} />} />    
          </Routes>
      </Router>
    </div>
    );
  }
}

