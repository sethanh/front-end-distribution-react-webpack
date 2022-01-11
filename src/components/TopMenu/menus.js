const thietlap = [
    {
        name: 'Thiết lập cửa hàng',
        to: '/Propducts',
        exact: true,
        icon: 'fa fa-th',
    },
    {
        name: 'Quản lý mẫu in',
        to: '/PriceBook',
        exact: true,
        icon: 'fa fa-edit',
    },
    {
        name: 'Quản lý người dùng',
        to: '/StockTakes',
        exact: true,
        icon: 'fa fa-check-square',
    },
    {
        name: 'Quản lý chi nhánh',
        to: '/Manufacturing',
        exact: true,
        icon: 'fa fa-certificate',
    },
    {
        name: 'Quản lý hủy món',
        to: '/Manufacturing',
        exact: true,
        icon: 'fa fa-certificate',
    },
    {
        name: 'Quản lý khuyến mại',
        to: '/Manufacturing',
        exact: true,
        icon: 'fa fa-shopping-cart',
    },
]
const taikhoan = [
    {
        name: 'Tài khoản',
        to: '/Propducts',
        exact: true,
        icon: 'fa fa-th',
    },
    {
        name: 'Đăng xuất',
        to: '/logout',
        exact: true,
        icon: 'fa fa-edit',
    }
]

export const menus = [
    { name: 'Tài khoản', to: '/taikhoan', exact: true, icon: 'fa fa-caret-down', list: taikhoan },
    { name: 'Thiết lập', to: '/dangnhap', exact: false, icon: 'fa fa-caret-down', list: thietlap },
];
