import React, { Component } from 'react';
import './dashboardpage.css';
import { ExcelRenderer, OutTable } from 'react-excel-renderer';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import CallApi from './../../utils/apiCaller';
import ControlPage from './../ControlPage/ControlPage';
import callApi from './../../utils/apiCaller';
import BasicInfo from './BasicInfo';
import { data } from 'jquery';
const TinhTong = (products) => {
    var l = products.length;
    var i = 0;
    var sum = 0;
    while (i < l) {
        sum = sum + products[i]['Thành tiền'];
        i = i + 1;
    }
    return sum;
}
const SoSanh = (a, b) => {
    if (TinhTong(a) > TinhTong(b)) { return true; }
    return false;
}
const TinhPhanTram = (a, b) => {
    if (SoSanh(a, b)) {
        return (100 * (TinhTong(a) - TinhTong(b)) / TinhTong(b)).toFixed(1);
    }
    else {
        return (100 * (TinhTong(b) - TinhTong(a)) / TinhTong(b)).toFixed(1);
    }
}
const sspt = (a, b) => {
    if (a >= b) {
        return (100 * (a - b) / b).toFixed(1);
    }
    else
        return (100 * (b - a) / b).toFixed(1);
}
const showvnd = (a) => {
    var kq = "";
    if (a / 1000000 > 0) {
        kq = (a / 1000000).toFixed(3) + 'tr';
    }
    else if (a / 1000) {
        kq = (a / 1000).toFixed(2) + 'ng';
    }
    else {
        kq = a.toFixed(2);
    }
    return kq;
}
const check = (data, value) => {
    var l = data.length;
    var i = 0;
    while (i < l) {
        if (data[i]['hour'] === value) {
            return (data[i].sum);
        }
        i = i + 1;
    }
    return false;
}
const checkP = (data, value) => {
    var l = data.length;
    var i = 0;
    while (i < l) {
        if (data[i]['Tên hàng'] === value) {
            return (data[i]['Thành tiền']);
        }
        i = i + 1;
    }
    return false;
}
const checkBcn = (data, value) => {
    var l = data.length;
    var i = 0;
    while (i < l) {
        if (data[i] === value) {
            return i;
        }
        i = i + 1;
    }
    return false;
}
class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            inyt: [],
            intd: [],
            khtd: [],
            khyt: [],
            realtime: [],
            chartx: null,
            charty: null,
            homnay: null,
            homqua: null,
            tuanqua: null,
            chartPx: null,
            chartPy: null,
            showDT: 'homnay'
        }
    }
    show = (value, key) => {
        if (key === 'Giờ') {
            if (value[0]) {
                let date2 = new Date(value[value.length - 1]['Thời gian']);
                let date1 = new Date(value[0]['Thời gian']);
                let i = date1.getHours() - 1;
                let l = date2.getHours() + 2;
                var data = [];
                while (i < l) {
                    data.push(i);
                    i = i + 1;
                }
                this.setState({
                    chartx: data
                })
            }
        }
        else if (key === 'Ngày') {
            if (value[0]) {
                let date2 = new Date(value[value.length - 1]['Thời gian']);
                let date1 = new Date(value[0]['Thời gian']);
                let l = date2.getDate() + 1;
                // let i = date1.getDate() - 1;
                // let l = date2.getDate() + 2;
                var monthLength = new Date(date1.getFullYear(), date2.getMonth(), 1, -1).getDate();
                var data = [];
                let t = l - 8;
                if (t > 0) {
                    while (t < l) {
                        data.push(i);
                        t = t + 1;
                    }

                }
                else {
                    while (t <= 0) {
                        data.push(monthLength + t);
                        t = t + 1;
                    }
                    var j = 1;
                    while (j < l) {
                        data.push(j);
                        j = j + 1;
                    }
                }
                // if (l < i) {
                //     while (i <= monthLength) {
                //         data.push(i);
                //         i = i + 1;
                //     }
                //     var j = 1;
                //     while (j < l) {
                //         data.push(j);
                //         j = j + 1;
                //     }
                // }
                // else {
                //     while (i <= monthLength) {
                //         data.push(i);
                //         i = i + 1;
                //     }
                // }

                this.setState({
                    chartx: data
                })
            }
        }

    }
    setChartPxy = (value) => {
        var i = 1;

        var datay = [];
        var name = value[0]['Tên hàng'];
        var gt = value[0]['Thành tiền'];
        var data = {};
        data['Tên hàng'] = name;
        data['Thành tiền'] = gt;
        datay[0] = data;
        var datax = []
        var datag = [];
        datag[0] = name;
        console.log('A', datay, 'B', datag);
        while (i < value.length) {
            var ch = checkBcn(datag, value[i]['Tên hàng']);
            console.log(ch, i);
            if (ch) {
                console.log(datay[ch]['Thành tiền']);

                datay[ch]['Thành tiền'] = datay[ch]['Thành tiền'] + value[i]['Thành tiền'];
                console.log(datay);
            }
            else {
                data = value[i];
                datay[datay.length] = data;
                datag.push(value[i]['Tên hàng']);
            }

            i = i + 1;
        }
        console.log('AHJK', datax, datay);
        this.setState({
            chartPx: datag,
            chartPy: datay
        })

    }
    componentDidMount() {
        callApi('getdb/invoices', 'GET', null).then(res => {
            console.log('HHHH', res.data);
            this.setState({
                data: res.data.data,
                inyt: res.data.yesterday,
                intd: res.data.today,
                homnay: res.data.homnay,
                homqua: res.data.homqua,
                tuanqua: res.data.tuanqua,
                charty: res.data.homnay,
                khtd: res.data.khtoday,
                khyt: res.data.khyt,
                realtime: res.data.realtime
            })
            this.show(res.data.today, 'Giờ');
            this.setChartPxy(res.data.listproduct);
        })
    }
    onSetChangDT = (value) => {
        const { tuanqua, homnay, homqua } = this.state;
        if (value === 'tuanqua') {
            this.show(this.state.data, 'Ngày');
        }
        else if (value === 'homqua') {
            this.show(this.state.inyt, 'Giờ');
        }
        else this.show(this.state.intd, 'Giờ');
        console.log('value', value);
        this.setState({
            charty: this.state[value],
            showDT: value
        });
    }

    render() {
        const { data, inyt, intd, chartx, charty, showDT, khtd, khyt, chartPx, chartPy, realtime } = this.state;
        if (chartPy) {
            console.log('y', chartPy[0]);
        }

        return (
            <div className='bginfo'>
                <div className='gflex1'></div>
                <div className='flexrow ctinfo' >
                    <div className='bginfoday'>
                        <BasicInfo data={data} intd={intd} inyt={inyt} khtd={khtd} khyt={khyt}></BasicInfo>
                        <div style={{ height: '10px', width: '100%' }}></div>
                        <div style={{ width: '100%', height: '450px', backgroundColor: 'white', padding: '10px' }}>
                            <div style={{ width: '100%', height: 'auto', lineHeight: '30px', fontWeight: 'bold', paddingLeft: '10px' }}
                            >DANH THU {showDT === 'homnay' ? 'HÔM NAY' : showDT === 'homqua' ? 'HÔM QUA' : 'TUẦN QUA'}</div>
                            <div className='flexrow' style={{ width: '100%' }}>
                                <div style={{ backgroundColor: showDT === 'homnay' ? '#4bac4d' : null }} className='bgselectedT' onClick={() => this.onSetChangDT('homnay')}>
                                    Hôm nay
                                </div>
                                <div style={{ backgroundColor: showDT === 'homqua' ? '#4bac4d' : null }} className='bgselectedT' onClick={() => this.onSetChangDT('homqua')}>
                                    Hôm qua
                                </div>
                                <div style={{ backgroundColor: showDT === 'tuanqua' ? '#4bac4d' : null }} className='bgselectedT' onClick={() => this.onSetChangDT('tuanqua')}>
                                    Tuần qua
                                </div>
                                <div style={{ flexGrow: 10, height: '100%' }}></div>
                            </div>
                            <div style={{ height: 30 }}></div>
                            <div style={{ width: '100%', height: '330px', display: 'flex', flexDirection: 'row' }}>
                                <div style={{ width: '50px' }}></div>
                                <div style={{ height: '100%', width: '2px', backgroundColor: 'blue', display: 'flex', flexDirection: 'column-reverse' }}>
                                    {charty ?
                                        charty.map((item, index) => (
                                            <div key={index} style={{ flexGrow: index - 1 > -1 ? item['sum'] - charty[index - 1]['sum'] : item['sum'], position: 'relative' }}>
                                                {<div style={{ position: 'absolute', top: 0, right: 10 }}>{index == 0 ? showvnd(item['sum']) : index === charty.length - 1 ? showvnd(item['sum']) : null}</div>}
                                            </div>))
                                        : null}
                                </div>
                                <div style={{ flexGrow: 1, height: '100%', flexDirection: 'row', display: 'flex', position: 'relative' }}>
                                    {
                                        chartx ? chartx.map((item, index) =>
                                            check(charty, item)
                                                ? (
                                                    <div style={{ flexGrow: 1, height: '100%', zIndex: 10 }} key={index}>
                                                        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column-reverse', justifyContent: 'center' }}>
                                                            <div style={{ height: '3px', textAlign: 'center', borderTop: 'solid 2px blue', position: 'relative' }}>
                                                                <div style={{ position: 'absolute', bottom: -25, left: 0, width: '100%', textAlign: 'center' }}>{item}</div>
                                                            </div>
                                                            <div style={{ flexGrow: check(charty, item), backgroundColor: '#0094da', position: 'relative' }} >
                                                                <div style={{ position: 'absolute', top: -20, left: 0, width: '100%', textAlign: 'center' }}>{showvnd(check(charty, item))}</div>
                                                            </div>
                                                            <div style={{ flexGrow: charty[charty.length - 1]['sum'] - check(charty, item) }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                                : (<div style={{ flexGrow: 1, height: '100%', display: 'flex', flexDirection: 'column-reverse' }} key={index}>
                                                    <div style={{ height: '3px', textAlign: 'center', borderTop: 'solid 2px blue', position: 'relative' }}>
                                                        <div style={{ position: 'absolute', bottom: -25, left: 0, width: '100%', textAlign: 'center' }}>{item}</div>
                                                    </div>
                                                    <div style={{ flexGrow: 1 }}></div>
                                                </div>)) : null
                                    }
                                    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: '0', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ flexGrow: 1, zIndex: 9 }} className='bdbt'></div>
                                        <div style={{ flexGrow: 1, zIndex: 9 }} className='bdbt'></div>
                                        <div style={{ flexGrow: 1, zIndex: 9 }} className='bdbt'></div>
                                        <div style={{ flexGrow: 1, zIndex: 9 }} className='bdbt'></div>
                                        <div style={{ flexGrow: 1, zIndex: 9 }} className='bdbt'></div>
                                        <div style={{ flexGrow: 1, zIndex: 9 }} className='bdbt'></div>
                                        <div style={{ flexGrow: 1, zIndex: 9 }} className='bdbt'></div>
                                        <div style={{ flexGrow: 1, zIndex: 9 }} className='bdbt'></div>
                                        <div style={{ flexGrow: 1, zIndex: 9 }} className='bdbt'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: '15px', width: '100%' }}></div>
                        <div style={{ width: '100%', height: '600px', backgroundColor: 'white', padding: '10px' }}>
                            <div style={{ width: '100%', height: 'auto', lineHeight: '30px', fontWeight: 'bold', paddingLeft: '10px' }}
                            >10 MẶT HÀNG DANH THU CAO NHẤT</div>
                            <div style={{ height: 30 }}></div>
                            <div style={{ width: '100%', height: '400px', display: 'flex', flexDirection: 'row' }}>
                                <div style={{ width: '50px' }}></div>
                                <div style={{ height: '100%', width: '2px', backgroundColor: 'blue', display: 'flex', flexDirection: 'column' }}>
                                    {chartPy ?
                                        chartPy.map((item, index) => (
                                            <div key={index} style={{ flexGrow: index - 1 > -1 ? item['Thành tiền'] - chartPy[index - 1]['Thành tiền'] : item['Thành tiền'], position: 'relative' }}>
                                                {<div style={{ position: 'absolute', top: 0, right: 10 }}>{index == 0 ? showvnd(item['Thành tiền']) : index === chartPy.length - 1 ? showvnd(item['Thành tiền']) : null}</div>}
                                            </div>))
                                        : null}
                                </div>
                                <div style={{ flexGrow: 1, height: '100%', flexDirection: 'row', display: 'flex', position: 'relative' }}>
                                    {
                                        chartPx ? chartPx.map((item, index) =>
                                            (
                                                <div style={{ flexGrow: 1, height: '100%', zIndex: 10 }} key={index}>
                                                    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column-reverse', justifyContent: 'center' }}>
                                                        <div style={{ height: '2px', textAlign: 'center', borderTop: 'solid 2px blue', position: 'relative' }}>
                                                            <div style={{ position: 'absolute', bottom: -100, left: 0, width: '90%', textAlign: 'center', lineHeight: '25px', fontSize: '12px', fontWeight: 'bold' }}>{item}</div>
                                                        </div>
                                                        <div style={{ flexGrow: chartPy[index]['Thành tiền'], backgroundColor: '#0094da', position: 'relative' }} >
                                                            <div style={{ position: 'absolute', top: -20, left: 0, width: '100%', textAlign: 'center' }}>
                                                                {showvnd(chartPy[index]['Thành tiền'])}
                                                            </div>
                                                        </div>
                                                        <div style={{ flexGrow: chartPy[0]['Thành tiền'] - chartPy[index]['Thành tiền'] }}>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        ) : null
                                    }
                                    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: '0', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ flexGrow: 1, zIndex: 9 }} className='bdbt'></div>
                                        <div style={{ flexGrow: 1, zIndex: 9 }} className='bdbt'></div>
                                        <div style={{ flexGrow: 1, zIndex: 9 }} className='bdbt'></div>
                                        <div style={{ flexGrow: 1, zIndex: 9 }} className='bdbt'></div>
                                        <div style={{ flexGrow: 1, zIndex: 9 }} className='bdbt'></div>
                                        <div style={{ flexGrow: 1, zIndex: 9 }} className='bdbt'></div>
                                        <div style={{ flexGrow: 1, zIndex: 9 }} className='bdbt'></div>
                                        <div style={{ flexGrow: 1, zIndex: 9 }} className='bdbt'></div>
                                        <div style={{ flexGrow: 1, zIndex: 9 }} className='bdbt'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ flexGrow: 1, flexDirection: 'column', paddingLeft: '15px' }}>
                        <div style={{ width: '100%', height: '150px', backgroundColor: 'white' }}></div>
                        <div style={{ height: '10px' }}></div>
                        <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', padding: '10px' }}>
                            <div style={{ width: '100', textAlign: 'center', fontWeight: 'bold', position: 'relative', height: 25, lineHeight: '25px' }}> <span class="fa fa-clock-o" style={{ fontSize: 22, color: 'green', paddingLeft: 10, position: 'absolute', left: 0 }}></span>CÁC HOẠT ĐỘNG GẦN ĐÂY</div>
                            {realtime.map((item, index) => (
                                <div key={index}> <span style={{ fontWeight: 'bold', color: 'blue', fontSize: 13 }}>{item.name}</span> đã {item.action} <span style={{ fontWeight: 'bold', color: 'green' }}>{item.quantity}</span></div>
                            ))}

                        </div>
                    </div>
                </div>
                <div className='gflex1'></div>
            </div>
        );
    }
}

export default DashboardPage;
