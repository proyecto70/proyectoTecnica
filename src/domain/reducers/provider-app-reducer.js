import { listProductsData } from "../data/products-data";

export const useProviderReducer = (state, action) => {

    switch (action.type) {
        case "SET_ACTIVATE_MENU_BURGUER":
            return {
                ...state,
                activateMenuBurguer: action.payload
            }
        case "SET_ACTIVATE_CART":
            return {
                ...state,
                activateCart: action.payload
            }
        case "SET_LIST_CART_SHOP":
            const newList = action.payload.productsList;
            const newTotal = newList.reduce((acc, product) => acc + product.priceTotal, 0);
            return {
                ...state,
                cartShopData: {
                    productsList: newList,
                    totalPrice: newTotal
                }
            };
        case "REMOVE_ITEM_FROM_CART":
            const filteredList = state.cartShopData.productsList.filter(p => p.id !== action.payload);
            const newTotalprice = filteredList.reduce((acc, product) => acc + product.priceTotal, 0);
            return {
                ...state,
                activateAddCart: false,
                cartShopData: {
                    productsList: filteredList,
                    totalPrice: newTotalprice
                }
            };
        case "SET_ADD_CART_SHOP":
            const getList = action.payload.listProducts;
            const incomingProduct = getList.find(p => p.id === action.payload.id);
            
            const existingProductIndex = state.cartShopData.productsList.findIndex(p => p.id === incomingProduct.id);
            
            let updatedProductsList;
            
            if (existingProductIndex !== -1) {
                updatedProductsList = state.cartShopData.productsList.map((product, index) => {
                    if (index === existingProductIndex) {
                        const updatedQuantity = product.quantity + 1;
                        return {
                            ...product,
                            quantity: updatedQuantity,
                            priceTotal: updatedQuantity * product.priceUnitary
                        };
                    }
                    return product;
                });
            } else {
                updatedProductsList = [
                        ...state.cartShopData.productsList,
                        {
                            ...incomingProduct,
                            quantity: 1,
                            priceTotal: incomingProduct.priceUnitary
                        }
                    ];
            }
            
            const updatedTotalPrice = updatedProductsList.reduce((acc, product) => acc + product.priceTotal, 0);
            
            return {
                ...state,
                activateAddCart: action.payload,
                cartShopData: {
                    productsList: updatedProductsList,
                    totalPrice: updatedTotalPrice
                    }
            };
        case "UPDATE_QUANTITY_IN_CART":
            const { id: updateId, quantity: newQuantity } = action.payload;
            
            const updatedList = state.cartShopData.productsList.map(product => {
                if (product.id === updateId) {
                    return {
                            ...product,
                            quantity: newQuantity,
                            priceTotal: newQuantity * product.priceUnitary
                        };
                    }
                    return product;
                });
            
                const newTotalUpdated = updatedList.reduce((acc, product) => acc + product.priceTotal, 0);
            
                return {
                    ...state,
                    cartShopData: {
                        productsList: updatedList,
                        totalPrice: newTotalUpdated
                    }
                };    
        case "SET_FILTERED_BY_MARK_LIST_PRODUCTS":
            const listProductsAllMark = listProductsData;
            const markSelected = action.payload;
            const filteredListMark = listProductsAllMark.filter(product => product.mark === markSelected);
            return {
                ...state,
                listProducts: filteredListMark
            };
        case "SET_FILTERED_BY_CATEGORY_LIST_PRODUCTS":
            const listProductsAll = listProductsData;
            const categorySelected = action.payload;
            if (categorySelected === "all") {
                return {
                    ...state,
                    listProducts: listProductsAll
                };
            }
            const filteredListCatgory = listProductsAll.filter(product => product.category === categorySelected);
            return {
                ...state,
                listProducts: filteredListCatgory
            };
        case "SET_GET_PRODUCT":
            const getProduct = action.payload;
            return {
                ...state,
                getProduct: getProduct
            }
        case "SET_ACTIVATE_CARD_PRODUCT":
            return {
                ...state,
                activateCardProduct: action.payload
            }
        case "SET_CLEAR_CART_SHOP":
            return {
                ...state,
                cartShopData: {
                    productsList: [],
                    totalPrice: 0
                }
            }
        default:
            return state;
    }
}