import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/nav/Nav';
import NewProductContainer from './containers/createProductContainer';
import ItemsContainer from './containers/ItemsContainer';
import Login from './components/login/Login';

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
        </Switch>
      </div>
    </Router>
  )
}

export default App;
