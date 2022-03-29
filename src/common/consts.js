const ROUTE_PATHS = {
    ROOT: '/',
    CUSTOMERS_PAGE: '/customers',
    PACKAGES_PAGE: '/packages',
    INVOICES_PAGE: '/invoices',
    INVOICE_PAGE: '/invoice',
    INVOICE_PAGE_WITH_PARAM: '/invoice/:customerId'
};

const MENU_ITEMS = [
    { text: 'Packages', path: ROUTE_PATHS.PACKAGES_PAGE },
    { text: 'Customers', path: ROUTE_PATHS.CUSTOMERS_PAGE },
    { text: 'Invoices', path: ROUTE_PATHS.INVOICES_PAGE }
];

const MESSAGES = {
    HEADER_TITLE: "Mail Delivery Service",
    INVOICES_TITLE: "Invoices",
    PACKAGES_TITLE: "Packages",
    INVOICES_CELLS: ["Customer Name", "Total Weight", "Total Price"],
    INVOICE_CELLS: ["ID", "Weight", "Price"],
    CUSTOMERS_TITLE: "Customers",
    CREATE_INVOICE: "Create Invoice"
}

export {
    ROUTE_PATHS,
    MENU_ITEMS,
    MESSAGES
}