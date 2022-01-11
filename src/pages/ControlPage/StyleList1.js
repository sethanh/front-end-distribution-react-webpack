import React, { Component } from 'react';

export class StyleList1 extends Component {
    constructor(props){
        super(props);
        this.state={
            label:this.props.data.label
        }
    }
    onChange=(event)=>{
        const {label}=this.state;
        this.props.onchangbox1(label,event.target.value);
    }

    render() {
        const { data } = this.props;

        return (
            <div className='bglistcontrol'>
                <div className='gflex1' >
                    <input className='ipstylct' type='text' placeholder={data.content} onChange={this.onChange}></input>
                </div>
            </div>
        );
    }
}

export default StyleList1;
