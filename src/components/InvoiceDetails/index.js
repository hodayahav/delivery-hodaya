import React from 'react';
import {getCustomerNameById} from "../../common/Functions";
import useStore from "../../store";
import {MESSAGES} from "../../common/consts";
import './styles.css';


export default function InvoiceDetails(props) {
    const [appData] = useStore();
    const { customerId, customerPackages, totalWeight, totalPrice } = props.invoice;

    return (
        <span>
            <span className='flex-row'>
                <div className='flex-column'>
                    <h5> {(new Date()).toDateString()} </h5>
                    <h5 className='content'> {getCustomerNameById(appData.customers, customerId)} </h5>
                </div>
                <h5>
                    {`Invoice No.${Math.floor(Math.random() * 100000)}`}
                </h5>
            </span>
            <table className='invoice-details-table'>
                <tr>
                    {MESSAGES.INVOICE_CELLS.map(cell =>
                        <th>{cell}</th>
                    )}
                </tr>
                {customerPackages.map(packageItem =>
                    <tr>
                        <td>{packageItem.id}</td>
                        <td>{packageItem.weight}</td>
                        <td>{packageItem.price}</td>
                    </tr>
                )}
                <tr>
                    <td></td>
                    <td>{totalWeight}</td>
                    <td>{`Total: ${totalPrice}`}</td>
                </tr>
            </table>
            <h5 className='packages-number'>
                {`You received ${customerPackages?.length || 0} packages\n Thank you for using our services`}
            </h5>
        </span>
    );
}