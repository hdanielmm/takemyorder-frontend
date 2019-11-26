import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/nav/Nav';
import NewProductContainer from './containers/createProductContainer';
import ItemsContainer from './containers/ItemsContainer';
import Login from './components/login/Login';
import tablesContainer from './containers/tablesContainer';

const App = (props) => {
  console.log('props', props)
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/newProduct' component={NewProductContainer} />
          <Route path='/items' component={ItemsContainer} />
          <Route path='/myTable' component={tablesContainer} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
