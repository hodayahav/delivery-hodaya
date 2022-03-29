import React from 'react';
import '../index.css';
import {
    Switch,
    Route,
} from "react-router-dom";
import {ROUTE_PATHS} from './consts';
import CustomersList from '../pages/customersList'
import PackagesList from "../pages/packagesList";
import InvoicesList from "../pages/invoicesList";
import Invoice from "../pages/invoice";
import Home from "../pages/home";

export default(
    <Switch>
        <Route exact path={ROUTE_PATHS.ROOT} component={Home}/>
        <Route exact path={ROUTE_PATHS.CUSTOMERS_PAGE} component={CustomersList}/>
        <Route exact path={ROUTE_PATHS.PACKAGES_PAGE} component={PackagesList}/>
        <Route exact path={ROUTE_PATHS.INVOICES_PAGE} component={InvoicesList}/>
        <Route exact path={ROUTE_PATHS.INVOICE_PAGE_WITH_PARAM} component={Invoice}/>
    </Switch>
);
