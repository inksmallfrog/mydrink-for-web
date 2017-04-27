/*
* @Author: inksmallfrog
* @Date:   2017-04-26 17:12:48
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-27 08:23:02
*/

'use strict';
import React from 'react';
import Drink from 'components/Drink.js'
import AddDrink from 'components/AddDrink'
import style from 'styles/stage.css';

class Stage extends React.Component{
    render(){
        return(
            <div className={style.stage}>
                {this.props.drinks.map((drink) => {
                    return <Drink key={drink.id} drink={drink}/>
                })}
                <AddDrink />
            </div>
        )
    }
}

export default Stage;