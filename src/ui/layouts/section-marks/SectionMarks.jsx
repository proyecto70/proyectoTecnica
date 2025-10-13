import "./SectionMarks.css"
import { useContext } from "react"
import { contextAppCreate } from "../../../domain/context/app/ProviderApp"

export const SectionMarks = () => {

    const { dispatch } = useContext(contextAppCreate);
    
    const handlerFilteredByMarks = (mark) => {
        dispatch({
            type: "SET_FILTERED_BY_MARK_LIST_PRODUCTS",
            payload: mark
        })
    }

    return (
        <section id="section-marks" className="section-marks">
            <h2>Marcas aliadas</h2>
            <div className="container-marks">
                <a onClick={() => handlerFilteredByMarks("HP")} href="#list-products" className="container-img-mark">
                    <img src="imgs/hp.png" alt="marca" />
                </a>
                <a onClick={() => handlerFilteredByMarks("LENOVO")} href="#list-products" className="container-img-mark">
                    <img src="imgs/lenovo.jpg" alt="marca" />
                </a>
                <a onClick={() => handlerFilteredByMarks("ASUS")} href="#list-products" className="container-img-mark">
                    <img src="imgs/asus.jpg" alt="marca" />
                </a>
                <a onClick={() => handlerFilteredByMarks("SONY")} href="#list-products" className="container-img-mark">
                    <img src="imgs/sony.webp" alt="marca" />
                </a>
                <a onClick={() => handlerFilteredByMarks("LG")} href="#list-products" className="container-img-mark">
                    <img src="imgs/lg.jpg" alt="marca" />
                </a>
            </div>
        </section>
    )
}