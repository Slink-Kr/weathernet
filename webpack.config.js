var path = require('path');
 var webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './template.html',
    title: 'Weathernet',
    filename: 'index.html',
    inject: 'body'
})
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
            },
            {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
            }
        ]
     },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
     stats: {
         colors: true
     },
     devtool: 'source-map',
     plugins: [
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin('styles.css'),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('production')
        //     }
        // })
    ]
 };