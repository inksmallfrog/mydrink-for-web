/*
* @Author: inksmallfrog
* @Date:   2017-04-27 09:14:42
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-27 10:44:11
*/

'use strict';
import React from 'react';
import PropTypes from 'prop-types';

import InputText from 'components/InputText.js';
import InputFile from 'components/InputFile.js';

import style from 'styles/dialog.css';

export default class Dialog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open: true,
            errors: []
        }
    }
    componentWillReceiveProps(){
        this.setState({
            open: true
        })
    }
    handleMainClick(e){
        e.stopPropagation();
        e.preventDefault();
    }
    handleClose(e){
        this.setState({
            open: false
        })
        e.stopPropagation();
        e.preventDefault();
    }
    render(){
        let dialogClass = (this.props.open && this.state.open) ? [style.dialog, style.show].join(' ') : style.dialog;
        return(
            <div className={dialogClass} onClick={this.handleClose.bind(this)}>
                <div className={style.main} onClick={this.handleMainClick.bind(this)}>
                    <p className={style.title}>添加新的饮料类型</p>
                    <form action="">
                        <InputText name="name" placeholder="饮料名" error={this.state.errors[0]}/>
                        <InputText name="factory" placeholder="厂商" error={this.state.errors[1]}/>
                        <InputText name="price" placeholder="价格" error={this.state.errors[2]}/>
                        <InputFile />
                    </form>
                </div>
            </div>
        )
    }
}