/*
* @Author: inksmallfrog
* @Date:   2017-04-26 17:21:02
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-27 08:48:50
*/

'use strict';
import React from 'react';
import PropTypes from 'prop-types';

import style from 'styles/drink.css';

class Drink extends React.Component{
    render(){
        let drink = this.props.drink;
        return(
            <div className={style.drinkSec}>
                <figure className={style.media}>
                    <img src={drink.pic_src} alt={drink.name}/>
                    <div>
                        <p className={style.title}>{drink.name}</p>
                        <p className={style.subtitle}>{drink.factory}</p>
                    </div>
                </figure>
                <div className={style.text}>
                    <p>价格：{drink.price}</p>
                    <p>次数：{drink.drink_times}</p>
                    <p>上次于：{drink.last_drunk_time}</p>
                </div>
                <button className={style.action}>+1</button>
            </div>
        )
    }
}
Drink.propTypes = {
    drink: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        factory: PropTypes.string,
        pic_src: PropTypes.string,
        price: PropTypes.number,
        drink_times: PropTypes.number,
        last_drunk_time: PropTypes.string
    }).isRequired
}

export default Drink;