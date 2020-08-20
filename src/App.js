import React from 'react';
import Feedback from './Feedback';
import Home from './Home';
import About from './About';
import Features from './Features';
import Pricing from './Pricing';
import ContactUs from './ContactUs';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
  return(
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/feedback" exact component={Feedback}/>
      <Route path="/about" exact component={About}/>
      <Route path="/pricing" exact component={Pricing}/>
      <Route path="/features" exact component={Features}/>
      <Route path="/contactus" exact component={ContactUs}/>
    </BrowserRouter>
  );
};

export default App;
