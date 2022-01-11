import React, { Component } from 'react';
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
export class StyleList3 extends Component {
    state = {
        startDate: Date.parse('2019-01-20'),
        endDate: new Date(),
        status: false
    };
    handleChangeStart = date => {
        var key = this.props.data;
        const { startDate, endDate, status } = this.state;
        var data = [date, endDate, '3'];
        if (status) {
            this.props.onchangbox3(data, key);
        }
        this.setState({
            startDate: date
        });
    };
    handleChangeEnd = date => {
        var key = this.props.data;
        const { startDate, endDate, status } = this.state;
        var data = [startDate, date, '3'];
        if (status) {
            this.props.onchangbox3(data, key);
        }
        this.setState({
            endDate: date
        });
    };
    onSelectAll = () => {
        var key = this.props.data;
        this.setState({ status: false });
        this.props.onchangbox3('Tất cả', key);
    }
    onSelectTime = () => {
        var key = this.props.data;
        const { startDate, endDate } = this.state;
        var data = [startDate, endDate, '3'];
        this.setState({ status: true });
        this.props.onchangbox3(data, key);
    }
    render() {
        const { data, stt } = this.props;
        console.log(data);
        const { status, startDate, endDate } = this.state;
        return (
            <div className='bgTest'>
                <div className='bglistcontrol3' onClick={() => this.onSelectAll()}>
                    <div className='boxsty2' >
                        {status ? null : <div className='chboxsty2'></div>}
                    </div>
                    <div >Tất cả</div>
                </div>
                <div className='bglistcontrol3' onClick={() => this.onSelectTime()}>
                    <div className='boxsty2' >
                        {status ? <div className='chboxsty2'></div> : null}
                    </div>
                    <div >Lọc</div>
                </div>
                <div className='bgcustom-input'>
                    <div className='txtbgcustom-input'>Từ</div>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChangeStart}
                        customInput={<ExampleCustomInputStart />}
                    />
                </div>
                <div className='bgcustom-input'>
                    <div className='txtbgcustom-input'>Đến</div>
                    <DatePicker
                        selected={this.state.endDate}
                        onChange={this.handleChangeEnd}
                        customInput={<ExampleCustomInputEnd />}
                    />
                </div>
            </div>
        );
    }
}

export default StyleList3;
