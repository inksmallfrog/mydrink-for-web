/*
* @Author: inksmallfrog
* @Date:   2017-04-27 14:59:43
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-27 16:09:33
*/

'use strict';
const Router = require('koa-router');

const koaBody = require('koa-body')({
    multipart: true,
    formidable: {
        uploadDir: 'public/upload_pics'
    }
});
const Drink = require('../models/Drink');

let drinks = new Router();
drinks.post('/drinks', koaBody, async (ctx, next)=>{
    let file = ctx.request.body.files;
    let filePath = '';
    for(var key in file){
        if( file[key].path && filePath==='' ){
            filePath = file[key].path;
            break;
        }
    }

    let drink = new Drink({
        name: ctx.request.body.fields.name,
        factory: ctx.request.body.fields.factory,
        pic_src: filePath,
        price: ctx.request.body.fields.price,
        drink_times: 0
    });
    drink.save();
    ctx.body = drink;
});
module.exports = drinks