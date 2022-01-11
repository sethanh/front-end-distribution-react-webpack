import React, { Component } from 'react';

export default class FilterColumn extends Component {
  onUpdateFilter=(key,value,iduser)=>{
    console.log('FT',key,value,iduser);
    this.props.onUpdateFilter(key,value,iduser);
  }
  render() {
    const {filter}=this.props;
    const key1 = Object.keys(filter);
    var key = [];
    key1.map((item, index) => {
      if ( item !== 'iduser') {
        key.push(item);
        return true;
      }
      return false;
    });
    return (
      <div className='bgctfl flexrow'>
        {key.map((item,index)=>(<div key={index} className='ctfilter pd5' onClick={()=>this.onUpdateFilter(item,!filter[item],filter.iduser)}>
          <span className={filter[item]===1?'fa fa-check-square pd5':'fa fa-square-o pd5'} ></span>{item}</div>))}
      </div>
    );
  }
}
