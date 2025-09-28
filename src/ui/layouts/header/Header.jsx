import { useContext, useEffect, useState } from "react"; // <== agrega useState y useEffect
import { CartShop } from "../../components/cart-shop/CartShop";
import { contextAppCreate } from "../../../domain/context/app/ProviderApp";
import "./Header.css";

export const Header = () => {
    const { 
        activateMenuBurguer, 
        activateCart, 
        activateAddCart, 
        cartShopData,
        dispatch 
    } = useContext(contextAppCreate);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(globalThis.scrollY > 0);
        };

        globalThis.addEventListener("scroll", handleScroll);

        return () => globalThis.removeEventListener("scroll", handleScroll);
    }, []);

    const handlerActivateMenuBurguer = () => {
        dispatch({ type: "SET_ACTIVATE_MENU_BURGUER", payload: !activateMenuBurguer });
    };

    const handlerActivateCart = () => {
        dispatch({ type: "SET_ACTIVATE_CART", payload: true });
    };

    return (    
        <>
        <nav className={`nav-responsive ${isScrolled ? "scrolled" : ""}`}>
            <div onClick={handlerActivateMenuBurguer} className="container-nav-img">
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className="container-nav" style={{
                transform: activateMenuBurguer ? "translateX(0)" : "translateX(-100%)",
                transition: "transform 0.5s ease-in-out"
            }}>
                <a onClick={handlerActivateMenuBurguer} href="#section-init">Inicio</a>
                <a onClick={handlerActivateMenuBurguer} href="#section-category">Categorias</a>
                <a onClick={handlerActivateMenuBurguer} href="#list-products">Productos</a>
                <a onClick={handlerActivateMenuBurguer} href="#section-marks">Marcas</a>
                <a onClick={handlerActivateMenuBurguer} href="#section-about-me">Conocenos</a>
                <a onClick={handlerActivateMenuBurguer} href="#section-footer">Contactanos</a>
            </div>
            <p className="title-logo">TECHPARTS ONLINE</p>
            <div onClick={handlerActivateCart} className="container-img-cart-shop">
                <i className="fa-solid fa-cart-shopping"></i>
                {activateAddCart ? <p>{cartShopData.productsList.length}</p> : null}
            </div>
            {activateCart && <CartShop />}
        </nav> 
        <nav className={`nav-normal ${isScrolled ? "scrolled" : ""}`}>
            <p className="title-logo">TECHPARTS ONLINE</p>
            <div className="container-menu">
                <a href="#section-init">Inicio</a>
                <a href="#section-category">Categorias</a>
                <a href="#list-products">Productos</a>
                <a href="#section-marks">Marcas</a>
                <a href="#section-about-me">Conocenos</a>
                <a href="#section-footer">Contactanos</a>
            </div>
            <div onClick={handlerActivateCart} className="container-img-cart-shop">
                <i className="fa-solid fa-cart-shopping"></i>
                {activateAddCart ? <p>{cartShopData.productsList.length}</p> : null}
            </div>
            {activateCart && <CartShop />}
        </nav>
        </>
    );
};
