import "./SectionAboutMe.css"

export const SectionAboutMe = () => {
    return (
        <section id="section-about-me" className="section-about-me">
            <h2>¿Quiénes Somos?</h2>
            <div className="container-about-me-grid">
                <div className="about-me-item">
                    <div className="container-about-me-img">
                        <img src="imgs/1.jpg" alt="imagen de empresa 1" />
                    </div>
                    <div className="container-about-me-info">
                    <h3>Techparts Online</h3>
                    <p>
                        Fundada con entusiasmo en febrero del año 2025, Techparts Online emerge como un proyecto visionario impulsado por cuatro integrantes: CAMILA FLOREZ GONZALEZ, IBETH GUERRERO, EYSAMAR CARDONA ORDOÑEZ y MICHELL GALVISnpm st. Unidos por una profunda afinidad hacia la innovación tecnológica, hemos concebido este e-commerce con el firme propósito de ofrecer a Colombia y al mundo una ventana digital donde convergen calidad, variedad y las últimas tendencias en el universo de la tecnología.
                    </p>
                    <p>
                        Desde cámaras de alta resolución hasta potentes CPU, pasando por portátiles de vanguardia, accesorios esenciales y periféricos ergonómicos como mouses, en Techparts Online curamos cuidadosamente cada producto para asegurar una experiencia de compra satisfactoria y enriquecedora. Nos esforzamos por ser el destino predilecto para quienes buscan potenciar su mundo digital con soluciones tecnológicas accesibles y de alto rendimiento.
                    </p>
                    <div className="container-contact-reds">
                        <a href="mailto:proyectotecnica70@example.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                        <a href="https://www.instagram.com/tech_parts_online?igsh=NDYzdGk4aGpidjhu&utm_source=qr" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://wa.me/573236537293" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
