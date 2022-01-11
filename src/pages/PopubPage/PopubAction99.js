import React, { Component } from 'react';
import { ExcelRenderer } from 'react-excel-renderer';
import './popub.css';
export default class PopubAction99 extends Component {
    handleChange = (event) => {
        let fileObj = event.target.files[0];
        ExcelRenderer(fileObj, (err, resp) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(resp.rows);
                var data = resp.rows;
                this.props.changeStorage(data);
            }
        });
    }
    render() {
        const {onHide}= this.props;
        return (
            <div className='bgimagepopub flexcenter flexrow'>
                <div className='bgpanelpop flexcolunm'>
                    <div className='iconout' onClick={onHide}>
                        <div className='fa fa-remove clicon'></div>
                    </div>
                    <div className='h1action99'>Nhập khách hàng từ file</div>
                    <div className='paction99'>Xử lý dữ liệu( Tải về File mẫu : <span style={{ color: 'blue' }}>Excel File</span>)</div>
                    <div className='bgbtnac99 flexrowEnd alcenter'>
                        <input type='file' id='file' onChange={this.handleChange}
                            style={{ display: 'none' }} ref={fileInput => this.fileInput = fileInput} />
                        <div className='btn99 alcenter' onClick={() => this.fileInput.click()}> <span className='fa fa-file-o pd5 fsic15'></span>Chọn file dữ liệu</div>
                    </div>
                </div>
            </div>
        );
    }
}
