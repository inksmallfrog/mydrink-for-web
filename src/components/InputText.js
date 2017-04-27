/*
* @Author: inksmallfrog
* @Date:   2017-04-27 09:37:03
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-27 09:44:11
*/

'use strict';
import React from 'react';
import PropTypes from 'prop-types';

import style from 'styles/input_text.css';

export default class InputText extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            errors: []
        }
    }
    render(){
        let errorClass = this.props.error ? style.show : style.error;
        return(
            <div className={style.box}>
                <input type="text" name={this.props.name} placeholder={this.props.placeholder}/>
                <div className={errorClass}>
                    {this.props.error}
                </div>
            </div>
        )
    }
}