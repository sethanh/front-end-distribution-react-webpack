import React, { Component } from 'react';
import { ExcelRenderer } from 'react-excel-renderer';
import './popub.css';
export default class InputStyle2 extends Component {
    constructor(props){
        super(props);
        this.state={
            kq: 0
        }
    }
    onSetState=(value)=>{
        this.setState({kq:value});
        var {data}= this.props;
        this.props.onSetState(data[0],data[value]);
    }
    render() {
        const { data } = this.props;
        const {kq}= this.state;
        return (
            <div className='bginput1'>
                <div style={{ width: '20px' }}></div>
                <div style={{ fontWeight: 'bold', fontSize: '15px', width: '130px' }}>{data[0]}</div>
                <div style={{ width: '20px' }}></div>
                <div className='bglistcontrol' style={{width:'110px'}} onClick={()=>this.onSetState(1)}>
                    <div className='boxsty2'>
                      {kq===1? <div className='chboxsty2'></div>:null}
                    </div>
                    <div >{data[1]}</div>
                </div>
                <div className='bglistcontrol' style={{width:'110px'}}  onClick={()=>this.onSetState(2)}>
                    <div className='boxsty2'>
                    {kq===2? <div className='chboxsty2'></div>:null}
                    </div>
                    <div >{data[2]}</div>
                </div>
               
                <div style={{ flexGrow: 1 }}></div>
            </div>
        );
    }
}
