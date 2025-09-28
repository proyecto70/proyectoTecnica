import "./SectionMarks.css"

export const SectionMarks = () => {
    return (
        <section id="section-marks" className="section-marks">
            <h2>Marcas aliadas</h2>
            <div className="container-marks">
                <div className="container-img-mark">
                    <img src="imgs/hp.png" alt="marca" />
                </div>
                <div className="container-img-mark">
                    <img src="imgs/lenovo.jpg" alt="marca" />
                </div>
                <div className="container-img-mark">
                    <img src="imgs/asus.jpg" alt="marca" />
                </div>
                <div className="container-img-mark">
                    <img src="imgs/sony.webp" alt="marca" />
                </div>
                <div className="container-img-mark">
                    <img src="imgs/lg.jpg" alt="marca" />
                </div>
            </div>
        </section>
    )
}