import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

import React, { useState }from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function App() {
  
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);

    return (
    <div>
      <Router>
          <Navbar/>
          <LoadingBar
          color='#f11946'
          progress={progress}
          height = '3'
          />
          <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey ={apiKey} key="default" category="general" pageSize ={24} />} />
            <Route path="/general" element={<News setProgress={setProgress} apiKey ={apiKey} key="general" category="general" pageSize ={24} />} />
            <Route path="/business" element={<News setProgress={setProgress} apiKey ={apiKey} key="business" category="business" pageSize ={24} />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} apiKey ={apiKey} key="entertainment" category="entertainment" pageSize ={24} />} />
            <Route path="/health" element={<News setProgress={setProgress} apiKey ={apiKey} key="health" category="health" pageSize ={24} />} />
            <Route path="/science" element={<News setProgress={setProgress} apiKey ={apiKey} key="science" category="science" pageSize ={24} />} />
            <Route path="/sports" element={<News setProgress={setProgress} apiKey ={apiKey} key="sports" category="sports" pageSize ={24} />} />
            <Route path="/technology" element={<News setProgress={setProgress} apiKey ={apiKey} key="technology" category="technology" pageSize ={24} />} />    
          </Routes>
      </Router>
    </div>
    );
}

