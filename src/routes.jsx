import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import RoutesLazyImport from './routes-lazy-import';

const Home = RoutesLazyImport({
  loader: () => import('./pages/home/home'/* webpackChunkName: 'home' */),
});

const Hooks = RoutesLazyImport({
  loader: () => import('./pages/hooks/hooks'/* webpackChunkName: 'hooks' */),
});

const WebpackPage = RoutesLazyImport({
  loader: () => import('./pages/webpack/webpack.page'/* webpackChunkName: 'webpackPage' */),
});

const Routes = () => (
    <HashRouter>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/home" component={ Home }/>
      <Route path="/hooks" component={ Hooks }/>
      <Route path="/webpack" component={ WebpackPage }/>
    </HashRouter>
);

export default Routes;
