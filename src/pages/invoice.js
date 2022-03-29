import React from 'react';
import '../App.css';
import {useParams} from "react-router-dom";
import useStore from "../store";
import {calculateInvoiceForCustomer} from "../common/Functions";
import InvoiceDetails from "../components/InvoiceDetails";

function Invoice() {
    const params = useParams();
    const {customerId} = params;
    const [appData] = useStore();
    const invoice = calculateInvoiceForCustomer(appData.packages, parseInt(customerId))
    return ( <InvoiceDetails invoice={invoice}/> );
}

export default Invoice;
