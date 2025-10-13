import "./Section-hover-category.css"
import { listCategoriesSelected } from "../../../domain/data/categories-seleted"
import { useContext } from "react"
import { contextAppCreate } from "../../../domain/context/app/ProviderApp"

export const SectionHoverCategory = () => {

    const { dispatch } = useContext(contextAppCreate);

    const handlerFilteredByCategory = (category) => {
        dispatch({
            type: "SET_FILTERED_BY_CATEGORY_LIST_PRODUCTS",
            payload: category
        })
    }

    return (
        <div className="container-hover-category">
            {listCategoriesSelected.map((category) => (
                <a href="#list-products" onClick={() => handlerFilteredByCategory(category.nameCategory)} key={category.id}>{category.name}</a>
            ))}
        </div>
    )
}