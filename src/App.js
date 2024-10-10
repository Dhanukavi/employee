
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import AddEmployeeComponent from './components/AddEmployeeComponenet';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
           <Route  path="/" component={ListEmployeeComponents} exact  />
            <Route path="/employees" component={ListEmployeeComponents} />
            <Route path="/add-employee" component={AddEmployeeComponent} />
            <Route path="/edit-employee/:id" component={AddEmployeeComponent} />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;