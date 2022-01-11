CREATE TABLE Customer (makh VARCHAR(20) PRIMARY KEY,chinhanh VARCHAR(100),loaikh VARCHAR(100),tenkh VARCHAR(100),sdt VARCHAR(12),diachi VARCHAR(100),
    khuvuc VARCHAR(100),phuongxa VARCHAR(100),cty VARCHAR(100),ngaysinh VARCHAR(30),gioitinh VARCHAR(10),email VARCHAR(100),nhomkh VARCHAR(100),ghichu VARCHAR(100),
    nguoitao VARCHAR(100),ngaytao VARCHAR(30),ngaygdcuoi VARCHAR(30),trangthai INT(2))
CREATE TABLE Products (mahh VARCHAR(20) PRIMARY KEY,tenhang VARCHAR(100),loaithucdon VARCHAR(100),nhomhang VARCHAR(100),loaihang VARCHAR(100),giaban FLOAT(50),
    giavon FLOAT(50),tonkho FLOAT(20),vitri VARCHAR(100),dathang VARCHAR(30),trangthai INT(2))    
    b={data:'jjj',code:'code'}
    import React from "react";
    import "./styles.css";
    
    export default function App() {
      const a = { chinhanh: true, makh: true, loaikh: false, phuongxa: true };
      const b = [
        {
          makh: "BB 1",
          chinhanh: "256HHH",
          loaikh: "NPP MAI NGUYỄN",
          tenkh: "Cô Năm",
          sdt: "1",
          diachi: "QL 1A, Ranh Giới Hồng Liêm, Bắc Bình",
          khuvuc: "Bình Thuận - Huyện Bắc Bình",
          phuongxa: null,
          cty: null,
          ngaysinh: null,
          gioitinh: null,
          email: null,
          nhomkh: null,
          ghichu: null,
          nguoitao: "Mainguyen_Thanh 0937058345",
          ngaytao: "31:12:2019 10:32:47",
          ngaygdcuoi: "00:01:1900 00:00:00",
          trangthai: 1
        },
        {
          makh: "chị Tien",
          chinhanh: "Cá nhân",
          loaikh: "NPP MAI NGUYỄN",
          tenkh: "Tiên",
          sdt: null,
          diachi: null,
          khuvuc: null,
          phuongxa: null,
          cty: null,
          ngaysinh: null,
          gioitinh: "Nữ",
          email: null,
          nhomkh: null,
          ghichu: null,
          nguoitao: "Seanest_Lý 0943356976",
          ngaytao: "02:01:2020 21:50:03",
          ngaygdcuoi: "00:01:1900 00:00:00",
          trangthai: 1
        },
        {
          makh: "chú Dương",
          chinhanh: "Cá nhân",
          loaikh: "NPP MAI NGUYỄN",
          tenkh: "Chú Dương",
          sdt: null,
          diachi: "A6 võ văn kiệt",
          khuvuc: "Bình Thuận - Thành phố Phan Thiết",
          phuongxa: "Phường Phú Thủy",
          cty: null,
          ngaysinh: null,
          gioitinh: "Nam",
          email: null,
          nhomkh: null,
          ghichu: null,
          nguoitao: "Seanest_Lý 0943356976",
          ngaytao: "29:02:2020 14:01:23",
          ngaygdcuoi: "29:02:2020 00:00:00",
          trangthai: 1
        },
        {
          makh: "Hiếu Thủy",
          chinhanh: "Cá nhân",
          loaikh: "NPP MAI NGUYỄN",
          tenkh: "Hiếu Thủy",
          sdt: null,
          diachi: "km7",
          khuvuc: "Bình Thuận - Huyện Hàm Thuận Bắc",
          phuongxa: "Xã Hàm Chính",
          cty: null,
          ngaysinh: null,
          gioitinh: "Nữ",
          email: null,
          nhomkh: null,
          ghichu: null,
          nguoitao: "Seanest_Lý 0943356976",
          ngaytao: "03:02:2020 17:53:21",
          ngaygdcuoi: "03:02:2020 00:00:00",
          trangthai: 1
        },
        {
          makh: "HT 1",
          chinhanh: "Cá nhân",
          loaikh: "NPP MAI NGUYỄN",
          tenkh: "TDV Hoa",
          sdt: "2",
          diachi: "QL 1A, Đồi Non, xã Tân Phúc, Hàm Tân, Bình Thuận",
          khuvuc: "Bình Thuận - Huyện Hàm Tân",
          phuongxa: null,
          cty: null,
          ngaysinh: null,
          gioitinh: null,
          email: null,
          nhomkh: null,
          ghichu: null,
          nguoitao: "Mainguyen_Thanh 0937058345",
          ngaytao: "31:12:2019 10:32:47",
          ngaygdcuoi: "14:02:2020 00:00:00",
          trangthai: 1
        }
      ];
      const t = Object.keys(a);
      var dt = [];
      t.map((item, index) => {
        if (a[item] === true) {
          dt.push(item);
          return true;
        }
        return false;
      });
      return (
        <div className="App">
          {dt && t ? (
            <div>
              <table>
                <tr className="hhh">
                  {dt.map((item, index) => (
                    <th className="hhh">{item}</th>
                  ))}
                </tr>
                {b.map((item, index) => (
                  <tr className="hhh">
                    {dt.map((data, stt) => (
                      <td className="hhh">{item[data]}</td>
                    ))}
                  </tr>
                ))}
              </table>
            </div>
          ) : null}
        </div>
      );
    }
    