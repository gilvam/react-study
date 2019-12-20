import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import RoutesLazyImport from './routes-lazy-import';

const home = RoutesLazyImport({
  loader: () => import('./app/pages/home/home'/* webpackChunkName: 'home' */),
});

const hooks = RoutesLazyImport({
  loader: () => import('./app/pages/hooks/hooks'/* webpackChunkName: 'hooks' */),
});
const webpackPage = RoutesLazyImport({
  loader: () => import('./app/pages/webpack/webpack.page'/* webpackChunkName: 'webpack' */),
});
const rscssPage = RoutesLazyImport({
  loader: () => import('./app/pages/rscss/rscss.page'/* webpackChunkName: 'rscss' */),
});
const ecmascript6Page = RoutesLazyImport({
  loader: () => import('./app/pages/ecmascript6/ecmascript6.page'/* webpackChunkName: 'ecmascript6' */),
});
const programFuncPage = RoutesLazyImport({
  loader: () => import('./app/pages/program-func/program-func.page'/* webpackChunkName: 'programFunc' */),
});
const libAxiosPage = RoutesLazyImport({
  loader: () => import('./app/pages/lib-axios/lib-axios.page'/* webpackChunkName: 'libAxios' */),
});
const authPage = RoutesLazyImport({
  loader: () => import('./app/pages/auth/auth.page'/* webpackChunkName: 'auth' */),
});
const docsPage = RoutesLazyImport({
  loader: () => import('./app/pages/docs/docs.page'/* webpackChunkName: 'docs' */),
});
const docsFormikPage = RoutesLazyImport({
  loader: () => import('./app/pages/docs/formik/formik-page'/* webpackChunkName: 'docs/formik' */),
});

const Routes = () => (
    <HashRouter>
      <Route exact path="/" component={ home }/>
      <Route exact path="/home" component={ home }/>
      <Route exact path="/hooks" component={ hooks }/>
      <Route exact path="/webpack" component={ webpackPage }/>
      <Route exact path="/rscss" component={ rscssPage }/>
      <Route exact path="/ecmascript6" component={ ecmascript6Page }/>
      <Route exact path="/programFunc" component={ programFuncPage }/>
      <Route exact path="/libAxios" component={ libAxiosPage }/>
      <Route exact path="/auth" component={ authPage }/>
      <Route exact path="/docs" component={ docsPage }/>
      <Route exact path="/docs/formik" component={ docsFormikPage }/>
    </HashRouter>
);

export default Routes;
