import './App.css';

import { BrowserRouter as Switch ,Route, BrowserRouter } from "react-router-dom";
import React from 'react';
import Home from 'features/HomePage/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import pageLogin from 'features/Form/pages/pageLogin';
import pageSignUp from 'features/Form/pages/pageSignUp';
import FollowPage from 'features/Film/pages/FollowPage';
import CategoryPage from 'features/Film/pages/CategoryPage';
import WatchPage from 'features/Film/pages/WatchPage';
function App() {

  return (
    <BrowserRouter>
      <div className="App">
          <Switch>

            <Route path="/home" component={Home} />
            <Route path="/" exact component={Home} />
            <Route path="/watch" component={WatchPage}/>
            <Route path="/login"  component={pageLogin}/>
            <Route path="/sign-up" component={pageSignUp}/>
            <Route path="/follow" component = {FollowPage}/>
            <Route path="/category" component={CategoryPage}/>

          </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
