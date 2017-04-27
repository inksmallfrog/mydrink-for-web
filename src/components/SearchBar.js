/*
* @Author: inksmallfrog
* @Date:   2017-04-26 17:16:50
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-27 09:02:36
*/

'use strict';
import React from 'react';
import style from 'styles/searchBar.css'

class SearchBar extends React.Component{
    render(){
        return(
            <div className={style.searchBox}>
                <input type="search" placeholder="搜索我喝过的饮料" className={style.searchInput}/>
                <button className={style.searchBtn}><span className="iconfont search"></span></button>
            </div>
        )
    }
}

export default SearchBar;