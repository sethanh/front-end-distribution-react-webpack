import React, { Component } from 'react';

export class StyleList2 extends Component {
    onClick=(status,stt)=>{
        if(!status){this.props.onchangbox2(stt);}
        
    }
    render() {
        const {data,stt}=this.props;
        return (
            <div className='bglistcontrol'>
                <div className='boxsty2' onClick={()=>this.onClick(data.status,stt)}>
                    {data.status?<div className='chboxsty2'></div>:null}    
                </div>
                <div >{data.label}</div>
            </div>
        );
    }
}

export default StyleList2;
