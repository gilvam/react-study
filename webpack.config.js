const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const modoDev = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: modoDev ? 'development' : 'production', // em prod, minifica arquivos
  entry: './src/index.jsx', // arquivo principal (ponto de entrada)
  output: { // caminho de saída do build
    path: __dirname + `/build`, // nome da pasta de saída da build
    filename: 'index.js', // nome do arquivo principal dentro da pasta de saída ( path logo a baixo )
  },
  devServer: {
    contentBase: `./build`,
    port: 9000
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({ /** DEPRECATED, usar terser-webpack-plugin https://github.com/webpack-contrib/uglifyjs-webpack-plugin*/ // minifica javascript
        cache: true,
        parallel: true // executa com paralelismo para executar o mais rápido possível
      }),
      new OptimizeCSSAssetsPlugin({}) // minifica css
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ // mini-css-extract-plugin
      filename: 'estilo.css' // arquivo final gerado com todos os arquivos .css encontrados
    })
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/, // ler arquivos .css, .sass e .scss
        use: [
          MiniCssExtractPlugin.loader, // mini-css-extract-plugin
          // 'style-loader', // adiciona CSS na DOM injetando a tag <style>
          'css-loader', // interpreta @import, url()...
          'sass-loader', // compila .sass/.scss para CSS
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // ler arquivos do tipo: .png, .svg. .jpg, .gif
        use: ['file-loader'] // ler arquivos
      }
    ]
  }
};
