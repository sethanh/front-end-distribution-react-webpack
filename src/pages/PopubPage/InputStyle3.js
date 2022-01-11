import React, { Component } from 'react';
import { ExcelRenderer } from 'react-excel-renderer';
import './popub.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const ExampleCustomInputStart = ({ value, onClick }) => (
    <div className="example-custom-input" onClick={onClick}>
        {value}
    </div>
);
const ExampleCustomInputEnd = ({ value, onClick }) => (
    <div className="example-custom-input" onClick={onClick}>
        {value}
    </div>
);
export default class InputStyle3 extends Component {
    state = {
        value:new Date(),
        status: false
    };
    handleChange = date => {

        this.setState({
            value: date
        });
        var {data}= this.props;
        var value='';
        value= String(date.getFullYear())+'-'+String(date.getMonth()+1)+'-'+String(date.getDate())+' '+String(date.getHours())+':'+String(date.getMinutes())+':'+String(date.getSeconds());
        this.props.onSetState(data[0],value);
    };
    render() {
        const { data } = this.props;

        return (
            <div className='bginput1'>
                <div style={{ width: '20px' }}></div>
                <div style={{ fontWeight: 'bold', fontSize: '15px', width: '130px' }}>{data[0]}</div>
                <div style={{ width: '20px' }}></div>
                <DatePicker
                    selected={this.state.value}
                    onChange={this.handleChange}
                    customInput={<ExampleCustomInputStart />}
                />
                <div style={{ width: '5px' }}></div>
                <div className={data[1]}></div>
                <div style={{flexGrow:1}}></div>
            </div>
        );
    }
}
