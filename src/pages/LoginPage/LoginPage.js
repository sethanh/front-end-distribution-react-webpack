import React, { Component } from 'react';
import './login.css';
import CallApi from './../../utils/apiCaller';
import { actLoginRequest } from './../../actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtemail: '',
            txtpassword: ''
        }
    }
    componentDidMount(){
        CallApi('connected','GET',null).then(res=>{
            console.log(res);
        });
    }
    onLogin = () => {
        console.log(this.state);
        const { txtemail, txtpassword } = this.state;
        this.props.onatLogin(txtemail, txtpassword);
    }
    _handleKeyDown=(e)=>{
        if (e.key === 'Enter') {
            console.log('do validate');
            this.onLogin('');
        }
    }
    
    onChange = (e) => {
        var { target } = e;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    render() {
        const { login } = this.props;
        var thongbao = '';
        if (login.tt == 1) { return <Redirect to='/Dashboard' /> }
        else if (login.tt == 0) thongbao = 'Sai email đăng nhập hoặc mật khẩu';
        return (
            <div className='bglogin'>
                <div className='panellogin flexcolunm centerlogin'>
                    <div className='bgiplogin '>
                        <input type='text' className='inputloginstyle'
                            placeholder='Email đăng nhập' name='txtemail'
                            onChange={this.onChange}
                        ></input>
                        <div className='imgWeb' onClick={this.onLogin}>
                        <img  alt="web icon"  src={require('./../../image/iconweb.png')} className='styleimgweb'/>
                        </div>
                    </div>
                    <div className='bgiplogin '>
                        <input type='password' className='inputloginstyle'
                            placeholder='Mật khẩu' name='txtpassword'
                            onChange={this.onChange} onKeyDown={this._handleKeyDown}
                        ></input>
                        <div className='bgbtnlogin' onClick={this.onLogin}>
                            Đăng nhập
                        </div>
                        <div className='bgthongbao'>{thongbao}</div>
                    </div>

                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        login: state.login
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onatLogin: (email, password) => {
            dispatch(actLoginRequest(email, password));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
