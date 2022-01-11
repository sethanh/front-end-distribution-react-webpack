const timkiem = [
    {
        label:'Mã khách hàng',
        content: 'Theo mã khách hàng',
        icon: 'fa fa-th',
    },
    {
        label:'Tên khách hàng',
        content: 'Theo tên khách hàng',
        icon: 'fa fa-th',
    },
]
const gioitinh = [
    {
        label: 'Tất cả',
        icon: 'fa fa-th',
        status:true
    },
    {
        label: 'Nam',
        icon: 'fa fa-th',
        status:false
    },
    {
        label: 'Nữ',
        icon: 'fa fa-th',
        status:false
    },
]
const trangthai = [
    {
        label: 'Tất cả',
        icon: 'fa fa-th',
        status:true
    },
    {
        label: 'Ngừng hoạt động',
        icon: 'fa fa-th',
        status:false
    },
    {
        label: 'Đang hoạt dộng',
        icon: 'fa fa-th',
        status:false
    },
]
const nohientai = [
    {
        label: 'Từ',
        icon: 'fa fa-th',
        content: 'Giá trị',
    },
    {
        label: 'Tới',
        icon: 'fa fa-th',
        content: 'Giá trị',
    },
]
//iv
const timkiemiv = [
    {
        label:'',
        content: 'Theo mã hóa đơn',
        icon: 'fa fa-th',
    },
    {
        label:'',
        content: 'Theo mã tên hàng',
        icon: 'fa fa-th',
    },
    {
        label:'',
        content: 'Mã vận đơn',
        icon: 'fa fa-th',
    },
]
const loaikh = ['Cá nhân','Công ty'];
export const customer = [`Chi nhánh`,[`Loại khách hàng`,`Công ty`,`Cá nhân`],`Tên khách hàng`,`Điện thoại`,`Địa chỉ`,`Khu vực`,`Phường xã`,`Công ty`,[`Ngày sinh`,'fa fa-calendar-o'],[`Giới tính`,'Nam','Nữ'],`Email`,`Nhóm khách hàng`,`Ghi chú`,`Người tạo`,[`Ngày tạo`,'fa fa-calendar-o'],[`Ngày giao dịch cuối`,'fa fa-calendar-o'],`Trạng thái`];
export const products = [`Loại thực đơn`,[`Nhà cung cấp`,' ',' ',' '],`Tên hàng hóa`,`Giá vốn`,`Giá bán`,`Tồn kho`,`Mã hàng`,[`Ngày nhập hàng`,'fa fa-calendar-o'],[`Hạn sử dụng`,'fa fa-calendar-o'],`Ghi chú`,`Số lượng nhập`,['Đơn vị tính',' ',' ',' '],`Khuyến mãi`,`Món thêm`,`Vị trí`,`Mô tả`,`Loại hàng`];
export const supliers = [`Tên nhà cung cấp`,`Email`,`Điện thoại`,`Địa chỉ`,`Khu vực`,`Phường/Xã`,`Tổng mua`,`Nợ cần trả hiện tại`,`Mã số thuế`,`Ghi chú`,`Nhóm nhà cung cấp`,`Trạng thái`,`tổng mua trừ trả hàng`,`Công ty`];
export const invoices =[`Chi nhánh`,[`Mã khách hàng`,'1','Mã khách hàng','Tên khách hàng'],[`Mã hàng`,'1','Mã hàng','Tên hàng hóa'],`Người tạo`,`Ghi chú`,`Giảm giá %`,`Giảm giá`,`Số lượng`,`Ghi chú hàng hóa`,`Trạng thái`];
export const datapopub ={
    customer,invoices,products,supliers
}
