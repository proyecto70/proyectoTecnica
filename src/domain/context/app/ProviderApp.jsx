import { createContext, useReducer } from "react";
import { initialStateProviderApp } from "../../models/initial-state";
import { useProviderReducer } from "../../reducers/provider-app-reducer";

export const contextAppCreate = createContext();

export const ProviderApp = ({ children }) => {

    const [state, dispatch] = useReducer(useProviderReducer, initialStateProviderApp);

    return <contextAppCreate.Provider value={{
        activateMenuBurguer: state.activateMenuBurguer,
        activateCart: state.activateCart,
        cartShopData: state.cartShopData,
        activateAddCart: state.activateAddCart,
        counter: state.counter,
        listProducts: state.listProducts,
        activateCardProduct: state.activateCardProduct,
        getProduct: state.getProduct,
        dispatch
    }}>{children}</contextAppCreate.Provider>;
};