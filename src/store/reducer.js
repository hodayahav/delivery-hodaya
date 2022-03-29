import ACTION_TYPES from "./actionTypes";

function reducer(state, action) {
    switch (action.type) {
        case ACTION_TYPES.SET_CUSTOMERS:
            return {...state,
                customers: action.customers
            };
        case ACTION_TYPES.SET_PACKAGES:
            return {...state,
                packages: action.packages
            };
        case ACTION_TYPES.ADD_PACKAGE:
            return {...state,
                packages: [...state.packages, action.packageData]
            };
        case ACTION_TYPES.REMOVE_PACKAGE: {
            let filteredPackages = state.packages.filter(packageItem => packageItem.id !== action.packageId)
            return {...state,
                packages: filteredPackages
            };
        }
        case ACTION_TYPES.REMOVE_CUSTOMER: {
            let filteredCustomers = state.customers.filter(customer => customer.id !== action.customerId)
            return {...state,
                customers: filteredCustomers
            };
        }
        default:
            return state;
    }
}

export default reducer;