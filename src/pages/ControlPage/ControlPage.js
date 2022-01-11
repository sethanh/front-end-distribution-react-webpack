import React, { Component } from 'react';
import './control.css';
import MenuControl from './MenuControl';

export default class ControlPage extends Component {
  onatSearch=(data,key)=>{
    this.props.onatSearch(data,key);
  }
  render() {
    const {listcontrol} = this.props;
    return (
      <div className='bgcontroll'>
          <div style={{width:200,height:10,backgroundColor:'white'}}></div>
          {listcontrol.map((item,index)=>(
            <MenuControl key={index} data={item} onatSearch={this.onatSearch}></MenuControl>
          ))} 
      </div>
    );
  }
}
