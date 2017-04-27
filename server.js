/*
* @Author: inksmallfrog
* @Date:   2017-04-26 16:23:45
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-27 16:07:12
*/

'use strict';
const path = require('path');

const koa = require('koa');
const app = new koa();

const json = require('koa-json');

app.use(json());

//设置静态文件路径
const serve = require('koa-static');
app.use(serve(path.join(__dirname, 'public'),{
    index: "index.html"
}));

//设置路由
const drinks = require('./routes/drinks');
app.use(drinks.routes());

//使用webpackMiddleware
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackMiddleware = require('koa-webpack-dev-middleware');
const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats:{
        colors: true,
    },
    historyApiFallback: true
}));

app.listen(3000);