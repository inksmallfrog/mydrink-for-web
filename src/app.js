/*
* @Author: inksmallfrog
* @Date:   2017-04-26 16:03:43
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-27 09:12:03
*/

'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import Header from 'components/Header.js';
import SearchBar from 'components/SearchBar.js';;
import Stage from 'components/Stage.js';
import Dialog from 'components/Dialog.js'

import style from 'styles/style.css';
import icon from 'styles/iconfont.css';

import drinks from 'data/drink_data.json';
for(let i = 0; i < drinks.length; ++i){
    drinks[i].pic_src = require("./" + drinks[i].pic_src);
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            drinks: drinks,
            isDialogOpen: false
        }
    }
    render(){
        let drinkCount = 0;
        this.state.drinks.forEach((drink)=>{
            drinkCount += drink.drink_times;
        })
        return (
            <div className="root">
                <Header drinkCount={drinkCount}/>
                <Stage drinks={this.state.drinks}/>
                <Dialog open={this.state.isDialogOpen}/>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});