import React, { Component } from 'react';
import { ExcelRenderer } from 'react-excel-renderer';
import InputStyle1 from './InputStyle1';
import InputStyle2 from './InputStyle2';
import InputStyle3 from './InputStyle3';
import InputStyle4 from './InputStyle4';
import InputStyle5 from './InputStyle5';
import callApi from './../../utils/apiCaller';
import './popub.css';
import { connect } from 'react-redux';
import { actInsertRequest, actFetchRequest } from './../../actions/index';
const setTrue = (key, value) => {
    var i;
    for (i = 0; i <= value.length; i++) {
        if (key === value[i]) { return 1 }
        else if (key.length > 1) {
            if (key[0] === value[i]) { return 2 }
        }
    }
    return 0;
}
class PopubAction1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datast: {},
            soluong: null
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    onSetState = (key, value) => {
        if (key === 'Mã hàng') {
            callApi('sumtonkho/products', 'PUT', { 'MHH': value }).then(res => {
                console.log(res.data);
                var l = res.data.soluong.length;
                var kq = 0;
                var i = 0;
                for (i; i < l; i++) {
                    kq = kq + res.data.soluong[i]['Tồn kho'];
                }
                console.log(kq);
                this.setState({ soluong: kq });
            });
        }
        console.log(key, value);
        this.setState({
            [key]: value
        });
    }
    onQ = () => {
        const { data, label } = this.props;
        console.log(this.state);
        let t = Object.keys(this.state);
        console.log(t);
        console.log(data);
        var datasend = [];
        var i;
        for (i = 0; i < data.length; i++) {
            datasend.push(setTrue(data[i], t) === 1 ? this.state[data[i]] : setTrue(data[i], t) === 2 ? this.state[data[i][0]] : null);
        }
        console.log(datasend);

        this.props.insert(datasend, label);
        this.props.onHide();
    }

    componentDidMount() {
        const { label } = this.props;
        var datact = this.props.data;
        var datatemp = datact.filter((item) => { return item.length === 4 });
        var l = datatemp.length;
        var data = [];
        for (let index = 0; index < l; index++) {
            data.push(datatemp[index][0]);
        }
        console.log("AS", data);
        var dataRes = [];
        callApi(`getgroup/${label}`, 'PUT', data).then(res => {
            console.log('A', res.data);
            var datastate = {};
            for (let index = 0; index < data.length; index++) {
                datastate[data[index]] = res.data[index]
            }
            console.log('Z', datastate);
            this.setState({
                datast: datastate
            })
        });

    }
    render() {
        const { onHide, data, label } = this.props;
        const { datast, soluong } = this.state
        return (
            <div className='bgimagepopub itemcenter'>
                <div className='bgbody' style={{position:'relative'}}>
                    <div style={{ width: '100%', height: '25px', textAlign: 'left', fontSize: '22px', fontWeight: 'bold' }}>Thêm {label}</div>
                    <div style={{ height: '20px' }}></div>
                    <div style={{ flexGrow: 1, display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
                        {data.map((item, index) =>
                            item.length === 4 && item[1] === '1' ? (<InputStyle5 data={item} onSetState={(key, value) => this.onSetState(key, value)} dts={datast && datast[item[0]] ? datast[item[0]] : {}} key={index} onsetChange={(e) => this.onChange(e)}></InputStyle5>)
                                : item.length === 4 ? (<InputStyle4 data={item} onSetState={(key, value) => this.onSetState(key, value)} dts={datast && datast[item[0]] ? datast[item[0]] : {}} key={index} onsetChange={(e) => this.onChange(e)}></InputStyle4>)
                                    : item.length === 3 ? (<InputStyle2 data={item} key={index} onSetState={(key, value) => this.onSetState(key, value)}></InputStyle2>)
                                        : item.length === 2 ? (<InputStyle3 data={item} key={index} onSetState={(key, value) => this.onSetState(key, value)}></InputStyle3>)
                                            : (<InputStyle1 data={item} key={index} onsetChange={(e) => this.onChange(e)}></InputStyle1>))}
                    </div>
                    <div style={{ height: '50px' }} className='itemcenter'>
                        <div style={{ flexGrow: 1 }}></div>
                        <div className='bgctactiondata '
                            onClick={this.onQ}><span className='fa fa-floppy-o'></span> lưu
                        </div>
                        <div className='bgctactiondata ' style={{ backgroundColor: '#9c9c9c' }}
                            onClick={onHide}><span className='fa fa-times-circle-o'></span> bỏ qua
                        </div>
                    </div>
                    {soluong!==null ?
                        <div style={{ position: 'absolute', bottom: '72px',color:'green',
                        width: '100%',textAlign:'center',fontSize:'18px',fontWeight:'bold' }}>Tổng số lượng có thể cung cấp là 
                        <span style={{color:'red',fontSize:'22px'}}>   {soluong}</span> 
                        </div> : null}
                </div>

            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        // customer: state.customer,
        // login: state.login
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        insert: (data, table) => {
            dispatch(actInsertRequest(data, table));
        },
        fetchAll: (table) => {
            dispatch(actFetchRequest(table));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopubAction1);
