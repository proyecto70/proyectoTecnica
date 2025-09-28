import "./CardProducts.css";
import { useContext } from "react";
import { contextAppCreate } from "../../../domain/context/app/ProviderApp";

export const CardProduct = () => {

    const { activateCardProduct, dispatch, getProduct, listProducts } = useContext(contextAppCreate);

    const handlerAddProductToCardShop = (product) => {
        dispatch({
            type: "SET_ADD_CART_SHOP",
            payload: {
                listProducts: listProducts,
                id: product.id
            }
        })
        handlerCloseCardProduct();
        alert("Producto agregado al carrito");
    }

    const handlerCloseCardProduct = () => {
        dispatch({
            type: "SET_ACTIVATE_CARD_PRODUCT",
            payload: false
        })
    }

    return (
            <div className="container-card-product" style={{ 
                transform: activateCardProduct ? 'translateX(0px)' : 'translateX(-3000px)',
                transition: 'all 0.3s ease-in-out' 
                }}>
                <div className="container-product-card">
                    <div className="container-img-product-card">
                        <img src={getProduct.imgUrl} alt="imagen del producto" />
                    </div>
                    <div className="container-info-card">
                        <h2>{getProduct.name}</h2>
                        <p><strong>Disponibilidad: </strong>{getProduct.quantity} unidades</p>
                        <p><strong>Precio: </strong>$ {getProduct.priceUnitary}</p>
                        <div className="container-about-product">
                            <p>Sobre el producto:</p>
                            <p>
                                {getProduct.description}
                            </p>
                        </div>
                        <button onClick={() => handlerAddProductToCardShop(getProduct)} type="button">
                            Agregar al carrito
                            <i className="fa-solid fa-cart-plus"></i>
                        </button>
                    </div>
                    <i onClick={handlerCloseCardProduct} className="fa-solid fa-xmark"></i>
                </div>
            </div>
    )
}
