import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Hooks from './pages/hooks/hooks';

const Routes = () => (
    <HashRouter>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/home" component={ Home }/>
      <Route path="/hooks" component={ Hooks }/>
    </HashRouter>
);

export default Routes;
