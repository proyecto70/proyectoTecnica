import "./SectionProducts.css"
import { listCategoriesSelected } from "../../../domain/data/categories-seleted"
import { useContext } from "react"
import { contextAppCreate } from "../../../domain/context/app/ProviderApp"

export const SectionProducts = () => {

    const { listProducts, dispatch } = useContext(contextAppCreate);

    const handlerFilteredByCategory = (category) => {
        dispatch({
            type: "SET_FILTERED_BY_CATEGORY_LIST_PRODUCTS",
            payload: category
        })
    }

    const handlerAddProductToCardShop = (product) => {
        dispatch({
            type: "SET_ADD_CART_SHOP",
            payload: {
                listProducts: listProducts,
                id: product.id
            }
        })
        alert("Producto agregado al carrito");
    }

    const handlerGetProduct = (product) => {
        dispatch({
            type: "SET_GET_PRODUCT",
            payload: product
        })
        handlerActivateCardProduct();
    }

    const handlerActivateCardProduct = () => {
        dispatch({
            type: "SET_ACTIVATE_CARD_PRODUCT",
            payload: true
        })
    }

    return (
        <section id="products" className="section-products">
            <h2 id="section-category" className="title-section">Categorias</h2>
            <div className="container-selected-category">
                {listCategoriesSelected.map((category) => {
                    return (
                        <a href="#list-products" key={category.id} onClick={() => handlerFilteredByCategory(category.nameCategory)}>
                            <div className="container-img-category">
                                <img src={category.imgUrl} alt={category.name} />
                                <div className="title-container-img">
                                    <i className="fa-solid fa-arrow-right"></i>
                                    <p>{category.name}</p>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
            <div id="list-products" className="container-show-products">
                <h2>Productos</h2>
                <div className="container-list-products">
                    {listProducts.map((product) => {
                        return (
                            <div onClick={() => handlerGetProduct(product)} className="container-product" key={product.id}>
                                <img src={product.imgUrl} alt={product.name} />
                                <div className="container-info-product">
                                    <p>{product.name}</p>
                                </div>
                                <p>$ {product.priceUnitary}</p>
                                <i onClick={(e) => {
                                    e.stopPropagation();
                                    handlerAddProductToCardShop(product);
                                }} className="fa-solid fa-cart-plus"></i>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}