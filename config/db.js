/*
* @Author: inksmallfrog
* @Date:   2017-04-27 14:48:22
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-27 14:52:28
*/

'use strict';
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydrink');
exports.mongoose = mongoose;