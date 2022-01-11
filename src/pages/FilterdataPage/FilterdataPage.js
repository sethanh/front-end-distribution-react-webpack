import React, { Component } from 'react';
import { ExcelRenderer, OutTable } from 'react-excel-renderer';
export class FilterdataPage extends Component {
    onclick=(value)=>{
        this.props.onchange(value);
    }
    render() {
        const data =this.props.data.list;
        const {name} = this.props.data;
        return (
            <div className='bgactiondata flexrowEnd alcenter' >
                {data.map((item, index) => (
                    <div key={index} className='bgctactiondata ' onClick={()=>this.onclick(item.action)}
                    ><span className={item.icon}></span> {item.name}
                    </div>
                    // <div className='bgctactiondata '><span className={item.icon}></span> {item.name}</div>
                ))}
                <div className='gflex1 h1filter'>{name}</div>
            </div>
        );
    }
}

export default FilterdataPage;
