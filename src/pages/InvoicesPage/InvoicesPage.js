import React, { Component } from 'react';
import './dashboardpage.css';
import { findIndex } from './../Functions';
import ControlPage from '../ControlPage/ControlPage';
import { control } from '../ControlPage/controllist';
import FilterdataPage from './../FilterdataPage/FilterdataPage';
import { datafilter } from './../FilterdataPage/listfilter';
import {datapopub} from './../PopubPage/dataPopub';
import TablePage from './../TablePage/TablePage';
import PopubAction99 from './../PopubPage/PopubAction99';
import PopubAction1 from './../PopubPage/PopubAction1';
import {  actImportRequest,actFetchRequest,actUpdateFTRequest } from './../../actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class InvoicesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false,
            cols: null,
            rows: null,
            showpp: false,//false
            action: 0,//0
            table: 'invoices',
            dataSearch: [],
            data: [],
            filter: null,
            dataresulf: null,
            onimport: 0
        }
    }
    changeStorage = (data) => {
        const { action, table } = this.state;
        console.log(action, data);
        this.props.import(data, table);
        this.setState({
            showpp: false,
            onimport: 1
        });
    }
    onHideShowpopub=()=>{
        this.setState({
            showpp: false,
        });
    }
    showpopub = (action) => {
        const {filter,table}=this.state;
        switch (action) {
            case 1: return null;
            case 2: return <PopubAction1 changeStorage={this.changeStorage} data={datapopub[table]} label={table} onHide={this.onHideShowpopub}></PopubAction1>;
            case 99: return <PopubAction99 changeStorage={this.changeStorage} onHide={this.onHideShowpopub}></PopubAction99>;
            default: return null
        }
    }
    onUpdateFilter = (key, value, iduser) => {
        const { table, filter } = this.state;
        var temp = filter;
        temp[key] = value;
        this.setState({
            filter: temp
        });
        this.props.updateFT(key, value, iduser, table);
    }
    onchange = (action) => {
        this.setState({
            action,
            showpp: true
        })
    }
    componentDidMount() {
        const { table, dataSearch } = this.state;
        const data = this.props[table];
        if (data && data.length === 0) {
            this.props.fetchAll(table);
        }
        else {
            this.setState({
                data,
                dataresulf:data.data,
                filter:data.filter
            });
        }
        console.log(data,table);

    }
    componentWillReceiveProps(nextProps) {
        const { table } = this.state;
        this.setState({
            data: nextProps[table],////
            filter: nextProps[table].filter,
            dataresulf: nextProps[table].data,
        });
    }
    onatSearch = (data, key) => {
        var { dataSearch } = this.state;
        var datact = this.state.data.data;
        var temp = {};
        temp.key = key;
        temp.value = data.label ? data.label : data;
        var i = 0;
        var index = findIndex(dataSearch, key);
        if (index == -1) {
            dataSearch.push(temp);
        }
        else {
            dataSearch.splice(index, 0, temp);
            dataSearch.splice(index + 1, 1);
        }
        var l = dataSearch.length;
        var j = 0;
        var datatemp = datact;
        while (j < l) {
            if (dataSearch[j].value !== 'Tất cả'&& dataSearch[j].value !=='') {
                if (dataSearch[j].value.length === 3&& dataSearch[j].value[0].length>1) {
                    datatemp = datatemp.filter((dt) => { return Date.parse(dt[dataSearch[j].key]) > Date.parse(dataSearch[j].value[0]) });
                    datatemp = datatemp.filter((dt) => { return Date.parse(dt[dataSearch[j].key]) < Date.parse(dataSearch[j].value[1]) });
                }
                else
                    datatemp = datatemp.filter((dt) => { return dt[dataSearch[j].key].toLowerCase().indexOf(dataSearch[j].value) !== -1 });
            }
            j++;
        }
        this.setState({
            dataSearch,
            dataresulf: datatemp
        });
    }
    render() {
        const { table, action, showpp, dataresulf, data, filter, dataSearch, onimport } = this.state;
        const { login } = this.props;
        console.log('KLM', dataresulf,dataSearch);
        console.log('HLM', data);
        if (login.tt === 3) {
            return <Redirect to='/' />
        }
        console.log(dataSearch, 'jjj');
        return (
            <div className='bginfo'>
                <div className='gflex1'></div>
                <div className='flexrow ctinfo' >
                    <ControlPage listcontrol={control[table]} onatSearch={this.onatSearch}></ControlPage>
                    <div style={{ width: 15 }}></div>
                    <div className='gflex1 flexcolunm'>
                        <FilterdataPage data={datafilter[table]} onchange={this.onchange}></FilterdataPage>
                        <TablePage data={dataresulf ? dataresulf : data ? data : []}
                            filter={filter ? filter : []}
                            onUpdateFilter={this.onUpdateFilter}>
                        </TablePage>

                    </div>
                </div>
                <div className='gflex1'></div>
                {
                    showpp ? this.showpopub(action) : null
                }

            </div>
        );
    }
}
var datact = (data, dataSearch) => {
    var datamain = data;
    var i = 0;
    while (i < dataSearch.length) {
        datatemp = datamain;
        datatemp = datamain.filter(dt => dt[dataSearch[i].key] === dataSearch[i].value);
        datamain = [...datatemp];
        i++;
    }
    return datamain;
}
const mapStateToProps = state => {
    return {
        invoices: state.invoices,
        login: state.login
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAll: (table) => {
            dispatch(actFetchRequest(table));
        },
        updateFT: (key, value, iduser, table) => {
            dispatch(actUpdateFTRequest(key, value, iduser, table));
        },
        import: (data, table) => {
            dispatch(actImportRequest(data, table));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoicesPage);
