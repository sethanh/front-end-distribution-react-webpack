import React from 'react';
import HomePage from './../../pages/HomePage/HomePage';
import ProductListPage from './../../pages/ProductListPage/ProductListPage';
import ProductActionPage from './../../pages/ProductActionPage/ProductActionPage';
import {
    ProductsPage,
    CustomerPage,
    InvoicesPage,
    SuppliersPage,
    NotFoundPage,
    LoginPage,
    LogoutPage,
    DashboardPage
} from './../../pages';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <LoginPage />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({ history }) => <ProductActionPage history={history} />
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({ match, history }) => <ProductActionPage match={match} history={history} />
    },
    {
        path: '/Customers',
        exact: false,
        main: () => <CustomerPage  />
    },
    {
        path: '/Invoices',
        exact: false,
        main: ({ history }) => <InvoicesPage history={history} />
    },
    {
        path: '/Propducts',
        exact: false,
        main: ({ history }) => <ProductsPage history={history} />
    },
    {
        path: '/Suppliers',
        exact: false,
        main: ({ history }) => <SuppliersPage history={history} />
    },
    {
        path: '/logout',
        exact: false,
        main: ({ history }) => <LogoutPage history={history} />
    },
    {
        path: '/Dashboard',
        exact: false,
        main: () => <DashboardPage  />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    },
  
];

export default routes;