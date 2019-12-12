const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production', // em prod, minifica arquivos
  entry: './src/index.jsx', // arquivo principal (ponto de entrada)
  output: { // caminho de saída do build
    path: path.resolve(__dirname, 'dist'), // nome da pasta de saída da build
    filename: isDevelopment ? '[name].bundle.js' : '[name]_[hash].bundle.js', // nome do arquivo principal dentro da pasta de saída ( path logo a baixo )
    chunkFilename: isDevelopment ? '[name].bundle.js' : '[name]_[hash].bundle.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: './dist',
    port: 9000
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true, // executa com paralelismo para executar o mais rápido possível
      }),
      new OptimizeCSSAssetsPlugin({}) // minifica css
    ],
    splitChunks: { // optimization - separa os node_modules em um arquivo separado
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(), // limpa a pasta do build
    new HtmlWebPackPlugin({ // copia index.html principal para a pasta da build
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name]_[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id]_[hash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
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
        test: /\.(png|svg|jpg|gif|ico)$/, // ler arquivos do tipo: .png, .svg. .jpg, .gif
        use: ['file-loader'] // ler arquivos
      },
    ]
  }
};
