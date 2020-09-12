import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home'
import Brooklyn from './components/pages/Brooklyn/brooklyn'
import Footer from './components/pages/Footer/Footer';
import Queens from './components/pages/Queens/queens';
import Green from './components/pages/Green/Green';
import Price from './components/pages/Price/Price';
import About from './components/pages/About/Aboutus';

function App() {
  return (
    <Router>
      <Navbar />
       <Switch>
         <Route path = '/react-nyc-adventure' exact component={Home}/>
         <Route path = '/brooklyn' component={Brooklyn}/>
         <Route path = '/queens' component={Queens}/>
         <Route path = '/middle' component={Green}/>
         <Route path = '/price' component={Price}/>
         <Route path = '/about' component={About}/>
       </Switch>
       <Footer></Footer>
    </Router>
  );
}

export default App;
