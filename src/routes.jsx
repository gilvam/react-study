import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Hooks from './pages/hooks/hooks';
import WebpackPage from './pages/webpack/webpack.page';

const Routes = () => (
    <HashRouter>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/home" component={ Home }/>
      <Route path="/hooks" component={ Hooks }/>
      <Route path="/webpack" component={ WebpackPage }/>
    </HashRouter>
);

export default Routes;
