import "./StepContainer.css";


export const StepContainer = ({activateStyleStep, text}) => {
    return (
        <div 
        className="container-step"
        style={{
            color: activateStyleStep ? "var(--secondary-color)" : "var(--white-color)",
            transition: "all 0.8s ease-in-out"
        }}
        >
            <i 
            className="fa-solid fa-circle"
            style={{
                scale: activateStyleStep ? 1.2 : 1,
                transition: "all 0.8s ease-in-out"
            }}
            ></i>
            <p style={{
                scale: activateStyleStep ? 1.1 : 1,
                transition: "all 0.8s ease-in-out"
            }}
            >{text}</p>
        </div>
    )
}
