import React from 'react';
import './App.css';
import Header from './components/Header';
import Books from './components/Books';

import Footer from './components/Footer';
import Route from 'react-router-dom/Route';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component{
  

render(){
  return (
    <div className="App container">
      <Header/>
      <Router>
     <Route path="/" exact component={Books}
      /> 
      /> 
      </Router>
      <Footer/>
    </div>
  );
}
}

export default App;
