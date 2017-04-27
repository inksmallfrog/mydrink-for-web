/*
* @Author: inksmallfrog
* @Date:   2017-04-26 21:36:32
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-27 09:02:28
*/

'use strict';
import React from 'react';
import PropTypes from 'prop-types';
/*import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';*/

//import next_pic from 'upload_pics/next.jpg';
import style from 'styles/drink.css';

class AddDrink extends React.Component{
    render(){
        return(
            <div className={style.drinkSec}>
                <button className={style.addDrink}><span className="iconfont add"></span></button>
            </div>
        )
    }
}
export default AddDrink;