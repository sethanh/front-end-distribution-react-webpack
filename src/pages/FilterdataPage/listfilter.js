
const customerft = [
    { name: 'Xuất file', icon: 'fa fa-sign-out',action:1},
    { name: 'Import',icon: 'fa fa-sign-in',action:99},
    { name: 'Khách hàng',icon: 'fa fa-plus',action:2},
];
const invoiesft = [
    { name: 'Xuất file', icon: 'fa fa-sign-out',action:1},
    { name: 'Import',icon: 'fa fa-sign-in',action:99},
    { name: 'Thêm hóa đơn',icon: 'fa fa-plus',action:2},
];
const productsft = [
    { name: 'Xuất file', icon: 'fa fa-sign-out',action:1},
    { name: 'Import',icon: 'fa fa-sign-in',action:99},
    { name: 'Thêm mới',icon: 'fa fa-plus',action:2},
];

export const invoices ={
    name:'Hóa đơn',
    list:invoiesft
}
export const customer ={
    name:'Khách hàng',
    list:customerft
}
export const products={
    name:'Hàng hóa',
    list:productsft
}
export const supliers={
    name:'Nhà cung cấp',
    list:productsft
}
export const datafilter ={
    invoices,products,customer,supliers
}