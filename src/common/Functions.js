export default function calculateInvoices(packages) {
    let customerPackages = [];
    const packagesGroups = Object.entries(groupBy(packages, 'customerId'));
    return packagesGroups.map((groupedPackages) => {
        customerPackages = groupedPackages[1];
        const {totalPrice, totalWeight} = calculateTotal(customerPackages);
        return {customerId: groupedPackages[0], totalPrice, totalWeight, customerPackages}
    })
}

export function calculateInvoiceForCustomer(packages, customerId) {
    const customerPackages = packages.filter(item => item.customerId === customerId)
    const {totalPrice, totalWeight} = calculateTotal(customerPackages);
    return {customerId, totalPrice, totalWeight, customerPackages};
}

function calculateTotal(customerPackages) {
    let totalPrice = 0;
    let totalWeight = 0;
    customerPackages.forEach((packageItem) => {
        totalPrice += packageItem.price;
        totalWeight += parseInt(packageItem.weight.replace("kg",""));
    })
    return {totalPrice, totalWeight}
}

const groupBy = (items, key) => items.reduce(
    (result, item) => ({
        ...result,
        [item[key]]: [
            ...(result[item[key]] || []),
            item,
        ],
    }),
    {},
);

export function getCustomerNameById(customers, customerId) {
    const customer = customers.filter(customer => customer.id === customerId);
    return customer.length ? customer[0].name : '';
}

export function sortPackagesByShippingOrder(packages) {
    return packages.sort((currentPackage, nextPackage) => currentPackage.shippingOrder - nextPackage.shippingOrder)
}

