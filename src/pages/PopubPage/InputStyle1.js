import React, { Component } from 'react';
import { ExcelRenderer } from 'react-excel-renderer';
import './popub.css';
export default class InputStyle1 extends Component {
    onChange=(e)=>{
        console.log(e.target.value);
        this.props.onsetChange(e);
    }
    render() {
        const { data } = this.props;
       
        return (
            <div className='bginput1'>
                <div style={{ width: '20px' }}></div>
                <div style={{ fontWeight: 'bold', fontSize: '15px', width: '130px' }}>{data}</div>
                <div style={{ width: '20px' }}></div>
                <input type='txt' style={{
                    flexGrow: 1, height: '80%', borderRadius: 5,
                    borderColor: '#f0e0df', borderWidth: '1px', backgroundColor: '#fffcfc', paddingLeft: '20px'
                }}
                    name={data}  onChange={this.onChange}></input>
            </div>
        );
    }
}
