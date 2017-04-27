/*
* @Author: inksmallfrog
* @Date:   2017-04-27 09:37:09
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-27 15:17:01
*/

'use strict';
import React from 'react';
import PropTypes from 'prop-types';

import style from 'styles/input_img.css';

export default class InputImg extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isImgUpload: false,
            imgSrc: ''
        }
    }
    handleImgInput(e){
        let file = e.target.files[0];
        if(file){
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({
                    isImgUpload: true,
                    imgSrc: e.target.result
                })
            }
            reader.readAsDataURL(file);
        }
    }
    render(){
        let innerFigure;
        if(this.state.isImgUpload){
            innerFigure = (
                <figure className={style.figure}>
                    <img src={this.state.imgSrc} alt="你上传的图片无法显示……"/>
                    <p>重新选择图片</p>
                </figure>
            )
        }
        else{
            innerFigure = (
                <figure className={style.figure}>
                    <span className="iconfont add"></span>
                    <p>上传饮料图片</p>
                </figure>
            )
        }
        return(
            <div className={style.box}>
                <input type="file" name={this.props.name} accept="image/gif,image/jpeg" onChange={this.handleImgInput.bind(this)}/>
                {innerFigure}
            </div>
        )
    }
}