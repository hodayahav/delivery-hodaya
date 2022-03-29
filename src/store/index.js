import {useEffect, useReducer} from 'react';

import '../App.css';
import reducer from "./reducer";
import ACTION_TYPES from "./actionTypes";
import {sortPackagesByShippingOrder} from "../common/Functions";

function useStore() {

    const [appData, dispatch] = useReducer(reducer, { customers: [], packages: [] }, undefined);

    useEffect(() => {
        fetch("/data.json").then(response => response.json())
            .then(data => {
                dispatch({ type: ACTION_TYPES.SET_CUSTOMERS, customers: data.customers });
                dispatch({ type: ACTION_TYPES.SET_PACKAGES, packages: sortPackagesByShippingOrder(data.packages)});
            });
    }, []);

    return [appData, dispatch];
}

export default useStore;
