import "./Item.css"
import { useContext, useState, useEffect } from "react"
import { contextAppCreate } from "../../../domain/context/app/ProviderApp"

export const Item = ({product}) => {

    const {
        dispatch
    } = useContext(contextAppCreate);


    const [ statusDelete, setStatusDelete ] = useState(false);
    let { name, category, imgUrl, quantity, priceTotal } = product;
    const [quantityProduct, setQuantityProduct] = useState(quantity);

    useEffect(() => {
        setQuantityProduct(quantity)
    }, [quantity]);

    useEffect(() => {
        dispatch({
            type: "UPDATE_QUANTITY_IN_CART",
            payload: {
                id: product.id,
                quantity: quantityProduct
            }
        });
    }, [quantityProduct]);
    

    const handlerDeleteItem = (id) => {
        setStatusDelete(true);
        setTimeout(() => {
            dispatch({ 
                type: "REMOVE_ITEM_FROM_CART", 
                payload: id
            });
        }, 300);
    }

    const incrementsQuantityProduct = () => {
        setQuantityProduct(quantityProduct + 1);
    }

    const decrementsQuantityProduct = () => {
        if (quantityProduct > 0) {
            setQuantityProduct(quantityProduct - 1);
        } else {
            alert(`La cantidad del producto ${name}, no puede ser menor a 0`)
        }
    }

    return (
        <>
            <div className="container-item"
             style={{
                scale: statusDelete ? 0 : 1,
                transition: "all 0.3s ease-in-out"
             }}
            >
                <i className="fa-solid fa-xmark" onClick={() => handlerDeleteItem(product.id)}></i>
                <div className="container-img-item">
                    <img src={imgUrl} alt="nombre del producto" />
                </div>
                <div className="container-info-item">
                    <div className="info-item">
                        <p>{name}</p>
                        <p>{category}</p>
                        <p>$ {priceTotal}</p>
                    </div>
                    <div className="container-counter-item">
                        <p onClick={incrementsQuantityProduct} >+</p>
                        <p>{quantityProduct}</p>
                        <p onClick={decrementsQuantityProduct} >-</p>
                    </div>
                </div>
            </div>
        </>
    )
}