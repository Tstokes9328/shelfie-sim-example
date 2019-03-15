import React, { Component } from 'react';
import './App.css';

//Components
import Dashboard from './component/dashboard/Dashboard';
import Form from './component/form/Form';
import Header from './component/header/Header';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <Dashboard inventoryList={this.state.inventoryList} getProducts={this.getProducts}/>

      //   <Form getProducts={this.getProducts} currentlySelected={this.state.currentlySelected}/>

      //   <Header />
      // </div>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/add" component={Form}/>
          <Route path="/edit/:id" component={Form}/>
        </Switch>
      </div>
    );
  }
}

export default App;