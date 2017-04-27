/*
* @Author: inksmallfrog
* @Date:   2017-04-27 14:52:51
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-27 16:08:14
*/

'use strict';
let mongodb = require('../config/db');
let Schema = mongodb.mongoose.Schema;
let DrinkSchema = new Schema({
    name: String,
    factory: String,
    pic_src: String,
    price: Number,
    drink_times: Number,
    last_drunk_time: Date
});
var Drink = mongodb.mongoose.model('Drink', DrinkSchema);
module.exports = Drink;