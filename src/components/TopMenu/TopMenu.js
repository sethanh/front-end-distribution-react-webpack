import React, { Component} from 'react';
import { Route, Link } from 'react-router-dom';
import {menus} from './menus';
import './../Menu/menu.css';
import MenuLink from './MenuLink';
import './topmenu.css';

class TopMenu extends Component {
    render() {
        return (
            <div className='bgmenu flexrow cltopmenu' style={{height:35}}>
                <div className='gflex1'></div>
                <div style={{ width: 1270, height: '100%' }} className='flexrow flexend'>
                    {this.showMenus(menus)}
                    <div className='gflex1'></div>
                    <div style={{position:'relative'}}>
                    <div style={{position:'absolute', top:3,left:25,fontWeight:'bold',color:'#4bac4d',fontSize:18}}>Karo</div>
                    <img  style={{width:'37px', height:'37px' }}src={require('./../../image/imagew.png')} alt="Girl in a jacket"/>
                    </div>
                </div>
                <div className='gflex1'></div>
            </div>
        );
    }

    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                        icon={menu.icon}
                        list={menu.list}
                    />
                );
            });
        }
        return result;
    }

}

export default TopMenu;
