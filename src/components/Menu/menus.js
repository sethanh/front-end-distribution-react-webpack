const hanghoa = [
    {
        name: 'Danh mục',
        to: '/Propducts',
        exact: true,
        icon: 'fa fa-th',
    },
    {
        name: 'Thiết Lập Giá',
        to: '/PriceBook',
        exact: true,
        icon: 'fa fa-edit',
    },
    {
        name: 'Kiễm Kho',
        to: '/StockTakes',
        exact: true,
        icon: 'fa fa-check-square',
    },
    {
        name: 'Sản Xuất',
        to: '/Manufacturing',
        exact: true,
        icon: 'fa fa-certificate',
    },
]
const giaodich = [
    {
        name: 'Hóa đơn',
        to: '/Invoices',
        exact: true,
        icon: 'fa fa-file-o',
    },
    {
        name: 'Trả hàng',
        to: '/Returns',
        exact: true,
        icon: 'fa fa-mail-reply-all',
    },
    {
        name: 'Nhập hàng',
        to: '/PurchaseOrder',
        exact: true,
        icon: 'fa fa-share-square-o',
    },
    {
        name: 'Trả hàng nhập',
        to: '/PurchaseReturns',
        exact: true,
        icon: 'fa fa-share-square',
    },
    {
        name: 'Xuất hủy',
        to: '/DamageItems',
        exact: true,
        icon: 'fa fa-trash',
    },
]
const doitac = [
    {
        name: 'Khách hàng',
        to: '/Customers',
        exact: true,
        icon: 'fa fa-users',
    },
    {
        name: 'Nhà cung cấp',
        to: '/Suppliers',
        exact: true,
        icon: 'fa fa-undo',
    },
    {
        name: 'Đối tác giao hàng',
        to: '/PurchaseOrder',
        exact: true,
        icon: 'fa fa-user-plus',
    }
]
const nhanvien = [
    {
        name: 'Nhân viên',
        to: '/Employee',
        exact: true,
        icon: 'fa fa-users',
    },
    {
        name: 'Chấm công',
        to: '/TimeSheet',
        exact: true,
        icon: 'fa fa-calendar',
    },
    {
        name: 'Bảng tính lương',
        to: '/Paysheet',
        exact: true,
        icon: 'fa fa-money',
    },
    {
        name: 'Thiết lập hoa hồng',
        to: '/Commission',
        exact: true,
        icon: 'fa fa-bitcoin',
    }
]
const baocao = [
    {
        name: 'Cuối ngày',
        to: '/EndOfDayReport',
        exact: true,
        icon: 'fa fa-pie-chart',
    },
    {
        name: 'Bán hàng',
        to: '/SaleReport',
        exact: true,
        icon: 'fa fa-file-archive-o',
    },
    {
        name: 'Hàng hóa',
        to: '/ProductReport',
        exact: true,
        icon: 'fa fa-cube',
    },
    {
        name: 'Khách hàng',
        to: '/CustomerReport',
        exact: true,
        icon: 'fa fa-user',
    },
    {
        name: 'Nhà cung cấp',
        to: '/SupplierReport',
        exact: true,
        icon: 'fa fa-undo',
    },
    {
        name: 'Nhân viên',
        to: '/UserReport',
        exact: true,
        icon: 'fa fa-male',
    },
    {
        name: 'Kênh bán hàng',
        to: '/SaleChannelReport',
        exact: true,
        icon: 'fa fa-shopping-cart',
    },
    {
        name: 'Tài Chính',
        to: '/FinancialReport',
        exact: true,
        icon: 'fa fa-line-chart',
    }
]
export const menus = [
    { name: 'Tổng Quan', to: '/Dashboard', exact: true, icon: 'fa fa-eye', list: null },
    { name: 'Hàng hóa', to: '/product-list', exact: false, icon: 'fa fa-cube', list: hanghoa },
    { name: 'Phòng bàn', to: '/TableAndRoom', exact: false, icon: 'fa fa-building', list: null },
    { name: 'Giao dịch', to: '/giaodich', exact: false, icon: 'fa fa-exchange', list: giaodich },
    { name: 'Đối tác', to: '/doitac', exact: false, icon: 'fa fa-male', list: doitac },
    { name: 'Nhân viên', to: '/nhanvien', exact: false, icon: 'fa fa-user', list: nhanvien },
    { name: 'Sổ quỹ', to: '/soquy', exact: false, icon: 'fa fa-dollar', list: null },
    { name: 'Báo cáo', to: '/baocao', exact: false, icon: 'fa fa-bar-chart', list: baocao }
];
