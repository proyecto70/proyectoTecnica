import "./HoverCategory.css"

export const HoverCategory = ({ listCategory }) => {
    return (
        <div className="container-hover-category">
            {listCategory.map((category) => (
                <p key={category.id}>{category.name}</p>
            ))}
        </div>
    )
}
