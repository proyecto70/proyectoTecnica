import "./SectionFooter.css"

export const SectionFooter = () => {
    return (
        <section id="section-footer" className="section-footer">
            <div className="container-section-footer">
                <div className="contaner-info-page">
                    <h3>Nombre de la empresa</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dolore corporis minus placeat impedit aperiam blanditiis dignissimos saepe quae. Blanditiis nihil officia numquam itaque et maiores sunt repellendus. Quidem, amet?
                    </p>
                </div>
                <div className="container-info-people">
                    <h3>Integrantes del grupo</h3>
                    <div className="container-people">
                        <i className="fa-solid fa-arrow-right"></i>
                        <p>CAMILA FLOREZ GONZALEZ</p>
                    </div>
                    <div className="container-people">
                        <i className="fa-solid fa-arrow-right"></i>
                        <p>IBETH GUERRERO</p>
                    </div>
                    <div className="container-people">
                        <i className="fa-solid fa-arrow-right"></i>
                        <p>EYSAMAR CARDONA ORDOÑEZ</p>
                    </div>
                    <div className="container-people">
                        <i className="fa-solid fa-arrow-right"></i>
                        <p>MICHELL GALVIS</p>
                    </div>
                </div>
                <div className="container-info-contact">
                    <h3>Información de contacto</h3>
                    <div className="container-info-contact-info">
                        <div className="container-contact">
                            <i className="fa-solid fa-envelope"></i>
                            <p>correo123empresa@gmail.com</p>
                        </div>
                        <div className="container-contact">
                            <i className="fa-solid fa-phone"></i>
                            <p>+57 3123456789</p>
                        </div>
                        <div className="container-contact">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>Calle 123, 123456789</p>
                        </div>
                    </div>
                    <div className="container-contact-reds">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}