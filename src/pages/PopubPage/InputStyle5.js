import React, { Component } from 'react';
import { ExcelRenderer } from 'react-excel-renderer';
import './popub.css';
export default class InputStyle5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            content: '',
            datafull:[],
            dts:[]
        }
    }
    onSetdata = (value) => {
        console.log(value);
        this.setState({
            show: false,
            content: value
        });
        var {data}= this.props;
        this.props.onSetState(data[0],value);
    }
    componentWillReceiveProps(nextProps){
        const {dts}=this.state;
        console.log('s',nextProps);
        if(dts.length==0){
            this.setState({
                datafull:nextProps.dts,
                dts: nextProps.dts
            });
        } 
    }
    onChange=(e)=>{
        // console.log(this.props.data[2],this.state,'Y',e.target.value);
        if(e.target.value===''){
            this.setState({
                show: false,
                content:e.target.value
            });
        }
        else{
        const { data} = this.props;
        var {datafull}=this.state;
        console.log(datafull[0][data[2]],e.target.value,data[2]);
        var datat=[];
        datat= datafull.filter((dt) => { return dt[data[2]].toLowerCase().indexOf(e.target.value) !== -1 });
        console.log('dt',datat);
        this.setState({
            show: true,
            dts:datat,
            content:e.target.value
        });
        }
    }
      
    render() {
       
        const { data} = this.props;
        const { show, content,dts } = this.state;
        console.log('dt',dts,data[0]);
        return (
            <div className='bginput1'>
            <div style={{ width: '20px'}}>
             
            </div>
            <div style={{ fontWeight: 'bold', fontSize: '15px', width: '130px' }}>{data[0]}</div>
            <div style={{ width: '20px',position:'relative'  }}>
            {show?(<div className='scrollbg'>
                {dts.map((item,index)=>(
                    <div key={index} className={index%2===1?'contentscr cl01':'contentscr cl02'}
                    onClick={()=>this.onSetdata(item[data[2]])}>
                        {item[data[2]]} - {String(item[data[3]]).length>20?String(item[data[3]]).slice(0,20):item[data[3]]}
                    </div>
                ))}
            </div>):null}
            </div>
            <input type='txt' style={{
                flexGrow: 1, height: '80%', borderRadius: 5,
                borderColor: '#f0e0df', borderWidth: '1px', backgroundColor: '#fffcfc', paddingLeft: '20px'
            }}
                name={data[0]}  onChange={this.onChange} value={content}></input>
        </div>
        );
    }
}
