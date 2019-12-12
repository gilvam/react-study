import React from 'react';
import Loadable from 'react-loadable';

const LoadingComponent = () => <div>Carregando componente...</div>;

/**
 * recebe opções do import e possui um componente de Loading para o carregamento inicial das rotas.
 * - https://medium.com/reactbrasil/code-splitting-e-lazy-loading-em-react-b1ce9870289f
 * @param opts
 * @return {*}
 * @constructor
 */
const RoutesLazyImport = opts => Loadable({
  ...opts,
  loading: LoadingComponent,
});

export default RoutesLazyImport;
