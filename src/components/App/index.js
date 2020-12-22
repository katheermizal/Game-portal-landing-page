import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../../pages/Home';
import ComingSoon from '../../pages/ComingSoon';
import NotFound from '../../pages/NotFound';
import { Header , Footer } from '../Layout';


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Header />
          <main className="App">
              <Switch>
                <Route path='/' component={ Home } exact />
                <Route path='/coming-soon' component={ ComingSoon } />
                <Route component={NotFound} />
              </Switch>
          </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
