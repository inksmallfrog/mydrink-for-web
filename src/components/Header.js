/*
* @Author: inksmallfrog
* @Date:   2017-04-26 17:12:42
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-27 09:09:31
*/

'use strict';
import React from 'react';
import SearchBar from 'components/SearchBar.js';

import style from 'styles/header.css';

class Header extends React.Component{
    render(){
        return(
            <section className={style.headerSec}>
                <div className={style.title}>自2017.4.26起，你已经喝过了{this.props.drinkCount}瓶饮料</div>
                <SearchBar />
            </section>
        )
    }
}

export default Header;