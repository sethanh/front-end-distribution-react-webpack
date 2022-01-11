import React, { Component } from 'react';
import { ExcelRenderer } from 'react-excel-renderer';
import './popub.css';
export default class InputStyle4 extends Component {
    onChange = (e) => {
        console.log(e.target.value);
        this.props.onsetChange(e);
    }
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            content: null
        }
    }
    onSetdata = (value) => {
        this.setState({
            show: false,
            content: value
        });
        var {data}= this.props;
        this.props.onSetState(data[0],value);
    }
    render() {
        const { data, dts } = this.props;
        const { show, content } = this.state;
        return (
            <div className='bginput1'>
                <div style={{ width: '20px' }}></div>
                <div style={{ fontWeight: 'bold', fontSize: '15px', width: '130px' }}>{data}</div>
                <div style={{ width: '20px' }}></div>
                <div style={{
                    flexGrow: 1, height: '30px', borderRadius: 5,
                    borderColor: '#f0e0df', borderWidth: '2px', backgroundColor: '#4bac4d',
                    textAlign: 'center', lineHeight: '30px', position: 'relative'
                }} >{content}
                    {show ?
                        dts.length < 10 ?
                            (<div style={{ width: '165px', height: 'auto', top: '35px', left: '0px', position: 'absolute', zIndex: 100, backgroundColor: '#aceefc', borderRadius: '4px' }}>
                                {dts.map((item, index) =>
                                    (<div style={{ width: '100%', height: '25px', lineHeight: '25px', borderRadius: '4px' }} key={index} className='hvitem'
                                        onClick={() => { this.onSetdata(item[data[0] === 'Nhà cung cấp' ? 'Mã nhà cung cấp' : data[0]]) }}>
                                        {item[data[0] === 'Nhà cung cấp' ? 'Mã nhà cung cấp' : data[0]]}
                                    </div>))}
                            </div>) :
                            (<div style={{ flexDirection:'row',width: '165px', height: 'auto', top: '35px', left: '0px', position: 'absolute', zIndex: 100, backgroundColor: '#aceefc', borderRadius: '4px' }}
                              className='flexsh'>
                                {dts.map((item, index) =>
                                    (<div style={{ width: '55px', height: '25px', lineHeight: '25px', borderRadius: '4px' }} key={index} className='hvitem'
                                        onClick={() => { this.onSetdata(item[data[0] === 'Nhà cung cấp' ? 'Mã nhà cung cấp' : data[0]]) }}>
                                        {item[data[0] === 'Nhà cung cấp' ? 'Mã nhà cung cấp' : data[0]]}
                                    </div>))}
                            </div>)
                        : null}
                </div>
                <div style={{ width: '70px', textAlign: 'center' }} onClick={() => this.setState({ show: !this.state.show })} >
                    <div className='fa fa-sort-desc' style={{ fontSize: '20px', paddingBottom: '5px' }}></div>
                </div>
            </div>
        );
    }
}
