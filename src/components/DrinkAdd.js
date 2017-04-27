/*
* @Author: inksmallfrog
* @Date:   2017-04-26 21:36:32
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-27 11:57:58
*/

'use strict';
import React from 'react';
import PropTypes from 'prop-types';
/*import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';*/

//import next_pic from 'upload_pics/next.jpg';
import style from 'styles/drink.css';

export default class DrinkAdd extends React.Component{
    handleBtnClick(e){
        this.props.openDialog();
        e.stopPropagation();
        e.preventDefault();
    }
    render(){
        return(
            <div className={style.drinkSec}>
                <button className={style.addDrink} onClick={this.handleBtnClick.bind(this)}><span className="iconfont add"></span></button>
            </div>
        )
    }
}