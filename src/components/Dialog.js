/*
* @Author: inksmallfrog
* @Date:   2017-04-27 09:14:42
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-27 16:21:31
*/

'use strict';
import React from 'react';
import PropTypes from 'prop-types';

import InputText from 'components/InputText.js';
import InputImg from 'components/InputImg.js';

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
    }
    handleSubmit(e){
        //make loading bar animate
        if(this.state.errors.length == 0){
            //send data with fetch
            let data = new FormData(e.target);
            fetch(e.target.getAttribute('action'), {
                method: 'POST',
                body: data
            }).then(()=>{
                //add data to app
                //...
                //
                this.setState({
                    open: false
                })
            }).catch(()=>{
                //connect err
            })
        }
        e.stopPropagation();
        e.preventDefault();
        return false;
    }
    handleClose(e){
        this.setState({
            open: false
        })
        e.stopPropagation();
        e.preventDefault();
    }
    checkPrice(e){
        let price = e.target.value;
        if(!price.match(/^\d+(.\d{1,2})?$/)){
            let errors = this.state.errors.slice();
            errors[2] = '价格的输入格式不正确！'
            this.setState({
                errors: errors
            });
        }
        else{
            this.setState({
                errors: []
            });
        }
    }
    render(){
        let dialogClass = (this.props.open && this.state.open) ? [style.dialog, style.show].join(' ') : style.dialog;
        return(
            <div className={dialogClass} onClick={this.handleClose.bind(this)}>
                <div className={style.main} onClick={this.handleMainClick.bind(this)}>
                    <p className={style.title}>添加新的饮料类型</p>
                    <form action="/drinks" method="post" encType="multipart/form-data" onSubmit={this.handleSubmit.bind(this)}>
                        <InputText name="name" value="" placeholder="饮料名" error={this.state.errors[0]}/>
                        <InputText name="factory" placeholder="厂商" error={this.state.errors[1]}/>
                        <InputText name="price" placeholder="价格" error={this.state.errors[2]} onValueChange={this.checkPrice.bind(this)}/>
                        <InputImg name="src_pic"/>
                        <button>提交</button>
                    </form>
                </div>
            </div>
        )
    }
}