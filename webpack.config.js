const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production', // em prod, minifica arquivos
  entry: './src/index.jsx', // arquivo principal (ponto de entrada)
  output: { // caminho de saída do build
    path: path.resolve(__dirname, 'dist'), // nome da pasta de saída da build
    filename: isDevelopment ? '[name].js' : '[name]_[hash].js', // nome do arquivo principal dentro da pasta de saída ( path logo a baixo )
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
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    // new MiniCssExtractPlugin({ // mini-css-extract-plugin
    //   filename: 'style.css' // arquivo final gerado com todos os arquivos .css encontrados
    // })
    // new MiniCssExtractPlugin({
    //   filename: '[hash].css',
    //   chunkFilename: '[hash].css'
    // })
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name]_[hash].css',
      // chunkFilename: isDevelopment ? '[id].css' : '[id]_[hash].css'
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
        // test: /\.s?[ac]ss$/, // ler arquivos .css, .sass e .scss
        test: /\.s?[ac]ss$/, // ler arquivos .css, .sass e .scss
        use: [
          MiniCssExtractPlugin.loader, // mini-css-extract-plugin
          // 'style-loader', // adiciona CSS na DOM injetando a tag <style>
          'css-loader', // interpreta @import, url()...
          'sass-loader', // compila .sass/.scss para CSS
        ]
      },
      // {
      //   test: /\.module\.s?[ac]ss$/,
      //   loader: [
      //     isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //         sourceMap: isDevelopment
      //       }
      //     },
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         sourceMap: isDevelopment
      //       }
      //     }
      //   ]
      // },
      // {
      //   test: /\.s?[ac]ss$/,
      //   exclude: /\.module.s?[ac]ss$/,
      //   loader: [
      //     isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         sourceMap: isDevelopment
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(png|svg|jpg|gif|ico)$/, // ler arquivos do tipo: .png, .svg. .jpg, .gif
        use: ['file-loader'] // ler arquivos
      },
    ]
  }
};


// const path = require('path')
// const HtmlWebPackPlugin = require("html-webpack-plugin");
//
// const htmlWebpackPlugin = new HtmlWebPackPlugin({
//   template: "./public/index.html",
//   filename: "./index.html"
// });
//
// module.exports = {
//   mode:'production', // em prod, minifica arquivos
//   entry: './src/index.jsx', // arquivo principal (ponto de entrada)
//   output: { // caminho de saída do build
//     path: path.resolve(__dirname, 'dist'), // nome da pasta de saída da build
//     filename: 'bundle.js', // nome do arquivo principal dentro da pasta de saída ( path logo a baixo )
//   },
//   devServer: {
//     contentBase: `./dist`,
//     port: 9000
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader"
//         }
//       },
//       {
//         test: /\.css$/,
//         use: [
//           {
//             loader: "style-loader"
//           },
//           {
//             loader: "css-loader",
//             options: {
//               modules: true,
//               importLoaders: 1,
//               localIdentName: "[name]_[local]_[hash:base64]",
//               sourceMap: true,
//               minimize: true
//             }
//           }
//         ]
//       }
//     ]
//   },
//   plugins: [htmlWebpackPlugin]
// };
