var path = require('path');
 var webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './template.html',
    title: 'Weathernet',
    filename: 'index.html',
    inject: 'body'
})
     
 module.exports = {
     entry: './src/index.jsx',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js'
     },
     module: {
         loaders: [
             {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            }
        ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map',
     plugins: [HtmlWebpackPluginConfig]
 };