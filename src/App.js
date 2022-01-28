import Navbar from './components/Navbar';
import News from './components/News';

import React, { Component } from 'react';
import {BrowserRouter as Router,
Routes, 
Route} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
    <div>
      <Router>
          <Navbar/>
          <Routes>
          <Route path="/" element={<News key="default" category="general" pageSize ={24} />} />
            <Route path="/general" element={<News key="general" category="general" pageSize ={24} />} />
            <Route path="/business" element={<News key="business" category="business" pageSize ={24} />} />
            <Route path="/entertainment" element={<News key="entertainment" category="entertainment" pageSize ={24} />} />
            <Route path="/health" element={<News key="health" category="health" pageSize ={24} />} />
            <Route path="/science" element={<News key="science" category="science" pageSize ={24} />} />
            <Route path="/sports" element={<News key="sports" category="sports" pageSize ={24} />} />
            <Route path="/technology" element={<News key="technology" category="technology" pageSize ={24} />} />    
          </Routes>
      </Router>
    </div>
    );
  }
}

