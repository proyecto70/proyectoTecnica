import { listProductsData } from "../data/products-data";

export const initialStateProviderApp = {
    activateMenuBurguer: false,
    activateCart: false,
    activateAddCart: false,
    activateCardProduct: false,
    getProduct: {},
    cartShopData: {
        productsList: [],
        totalPrice: 0
    },
    listProducts: listProductsData
}