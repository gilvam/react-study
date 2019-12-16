import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import RoutesLazyImport from './routes-lazy-import';

const home = RoutesLazyImport({
  loader: () => import('./pages/home/home'/* webpackChunkName: 'home' */),
});

const hooks = RoutesLazyImport({
  loader: () => import('./pages/hooks/hooks'/* webpackChunkName: 'hooks' */),
});

const webpackPage = RoutesLazyImport({
  loader: () => import('./pages/webpack/webpack.page'/* webpackChunkName: 'webpackPage' */),
});

const rscssPage = RoutesLazyImport({
  loader: () => import('./pages/rscss/rscss.page'/* webpackChunkName: 'rscssPage' */),
});

const ecmascript6Page = RoutesLazyImport({
  loader: () => import('./pages/ecmascript6/ecmascript6.page'/* webpackChunkName: 'ecmascript6Page' */),
});

const programFuncPage = RoutesLazyImport({
  loader: () => import('./pages/program-func/program-func.page'/* webpackChunkName: 'programFuncPage' */),
});

const Routes = () => (
    <HashRouter>
      <Route exact path="/" component={ home }/>
      <Route exact path="/home" component={ home }/>
      <Route path="/hooks" component={ hooks }/>
      <Route path="/webpackPage" component={ webpackPage }/>
      <Route path="/rscssPage" component={ rscssPage }/>
      <Route path="/ecmascript6Page" component={ ecmascript6Page }/>
      <Route path="/programFuncPage" component={ programFuncPage }/>
    </HashRouter>
);

export default Routes;
