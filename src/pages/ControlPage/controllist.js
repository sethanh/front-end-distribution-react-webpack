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
const timkiempd = [
    {
        label:'Mã nhập hàng',
        content: 'Theo mã nhập hàng',
        icon: 'fa fa-th',
    },
    {
        label:'Mã hàng',
        content: 'Theo mã hàng',
        icon: 'fa fa-th',
    },
    {
        label:'Tên hàng hóa',
        content: 'Theo tên hàng hóa',
        icon: 'fa fa-th',
    },
]
const timkiemiv = [
    {
        label:'Mã hóa đơn',
        content: 'Theo mã hóa đơn',
        icon: 'fa fa-th',
    },
    {
        label:'Mã hàng',
        content: 'Theo mã hàng',
        icon: 'fa fa-th',
    },
    {
        label:'Mã khách hàng',
        content: 'Theo mã khách hàng',
        icon: 'fa fa-th',
    },
]
const timkiemncc = [
    {
        label:'Mã nhà cung cấp',
        content: 'Theo mã nhà cung cấp',
        icon: 'fa fa-th',
    },
    {
        label:'Tên nhà cung cấp',
        content: 'Theo tên nhà cung cấp',
        icon: 'fa fa-th',
    }
]
export const customer = [
    { name: 'Tìm kiếm', icon: 'fa fa-caret-down',key:'timkiem',list:timkiem ,stylelist:1},
    { name: 'Ngày tạo',icon: 'fa fa-caret-down',key:'ngaytao', list: null ,stylelist:3},
    { name: 'Giới tính',icon: 'fa fa-caret-down',key:'gioitinh', list: gioitinh,stylelist:2},
    { name: 'Nợ hiện tại',icon: 'fa fa-caret-down',key:'nohientai', list: nohientai,stylelist:1},
    { name: 'Trạng thái',icon: 'fa fa-caret-down',key:'trangthai', list: trangthai,stylelist:2},
];
export const invoices = [
    { name: 'Tìm kiếm', icon: 'fa fa-caret-down',key:'timkiem',list:timkiemiv ,stylelist:1},
    { name: 'Ngày tạo',icon: 'fa fa-caret-down',key:'ngaytao', list: null },
    { name: 'Trạng thái',icon: 'fa fa-caret-down',key:'trangthai', list: trangthai,stylelist:2},
];
export const supliers = [
    { name: 'Tìm kiếm', icon: 'fa fa-caret-down',key:'timkiem',list:timkiemncc ,stylelist:1},
    { name: 'Ngày tạo',icon: 'fa fa-caret-down',key:'ngaytao', list: null },
    { name: 'Trạng thái',icon: 'fa fa-caret-down',key:'trangthai', list: trangthai,stylelist:2},
];
export const products = [
    { name: 'Tìm kiếm', icon: 'fa fa-caret-down',key:'timkiem',list:timkiempd ,stylelist:1},
    { name: 'Ngày nhập hàng',icon: 'fa fa-caret-down',key:'ngaytao', list: null },
    { name: 'Hạn sử dụng',icon: 'fa fa-caret-down',key:'ngaytao', list: null },
];
export const control ={
    customer,invoices,products,supliers
}
