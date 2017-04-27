/*
* @Author: inksmallfrog
* @Date:   2017-04-27 09:37:09
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-27 10:08:51
*/

'use strict';
import React from 'react';
import PropTypes from 'prop-types';

import style from 'styles/input_file.css';

export default class InputFile extends React.Component{
    render(){
        return(
            <div className={style.box}>
                <input type="file"/>
                <span className={style.button}>上传饮料图片</span>
            </div>
        )
    }
}