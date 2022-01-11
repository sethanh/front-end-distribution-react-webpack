import React, { Component } from 'react';
import './control.css';
import StyleList1 from './StyleList1';
import StyleList2 from './StyleList2';
import StyleList3 from './StyleList3';
export default class MenuControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datacontrol: null
        }
    }
    onchangbox2 = (key) => {
        let data = this.state.datacontrol;
        data.list[key].status=true;
        var temp=key-1;
        while(temp>-1){
            data.list[temp].status=false
            temp=temp-1;
        }
        temp=key+1;
        while(temp<3){
            data.list[temp].status=false;
            temp=temp+1;
        }
        this.setState(
            {
                datacontrol:data
            }
        );
        console.log(data.list[key],data.name);
        this.props.onatSearch(data.list[key],data.name);
    }
    onchangbox1 = (key,value) => {
        this.props.onatSearch(value,key);
        console.log(key,value);
    }
    onchangbox3 = (value,key) => {
        console.log('day',key);
        this.props.onatSearch(value,key.name);
        
    }
    render() {
        const { data } = this.props;
        const { datacontrol } = this.state;
        if (!datacontrol) {
            this.setState({
                datacontrol: data
            }
            );
        }
        return (
            <div className='bgmenucontrol'>
                <div className='labelcontrol' >
                    {data.name}
                    <div className='bglbl'></div>
                </div>
                {datacontrol ?
                    datacontrol.stylelist === 1 ? datacontrol.list.map((item, index) => (
                        <StyleList1 key={index} data={item} onchangbox1={this.onchangbox1}></StyleList1>
                    )) :
                        datacontrol.stylelist === 2 ? datacontrol.list.map((item, index) => (
                            <StyleList2 key={index} data={item} onchangbox2={this.onchangbox2} stt={index}></StyleList2>
                        )) :
                            <StyleList3  onchangbox3={this.onchangbox3} data={datacontrol}/>: null}
            </div>
        );
    }
}
