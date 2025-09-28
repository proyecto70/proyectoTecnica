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
                        Fundada con entusiasmo en febrero del año 2025, Techparts Online emerge como un proyecto visionario impulsado por cuatro integrantes: Integrante 1, Integrante 2, Integrante 3 y Integrante 4. Unidos por una profunda afinidad hacia la innovación tecnológica, hemos concebido este e-commerce con el firme propósito de ofrecer a Colombia y al mundo una ventana digital donde convergen calidad, variedad y las últimas tendencias en el universo de la tecnología.
                    </p>
                    <p>
                        Desde cámaras de alta resolución hasta potentes CPU, pasando por portátiles de vanguardia, accesorios esenciales y periféricos ergonómicos como mouses, en Techparts Online curamos cuidadosamente cada producto para asegurar una experiencia de compra satisfactoria y enriquecedora. Nos esforzamos por ser el destino predilecto para quienes buscan potenciar su mundo digital con soluciones tecnológicas accesibles y de alto rendimiento.
                    </p>
                    <p>
                        Conscientes de la realidad colombiana, facilitamos tus compras a través de diversos métodos de pago seguros y confiables, incluyendo Nequi, Daviplata y las transferencias a Bancolombia. En Techparts Online, la comodidad y la confianza de nuestros clientes son pilares fundamentales de nuestra operación.
                    </p>
                    </div>
                </div>
                <div className="about-me-item">
                    <div className="container-about-me-info">
                    <h3>Misión y Visión</h3>
                    <p>
                        Misión: En Techparts Online, nuestra misión primordial es democratizar el acceso a la tecnología de punta en Colombia y más allá. Nos dedicamos a ofrecer un catálogo diverso de productos tecnológicos de calidad, respaldados por un servicio al cliente excepcional y una experiencia de compra en línea intuitiva y segura. Buscamos ser un motor de progreso, facilitando a nuestros clientes las herramientas necesarias para prosperar en un mundo cada vez más digitalizado.
                    </p>
                    <p>
                        Visión: Aspiramos a consolidarnos como la plataforma líder de e-commerce tecnológico en Colombia, reconocidos por nuestra integridad, innovación constante y compromiso con la satisfacción del cliente. Visualizamos un futuro donde Techparts Online sea sinónimo de confianza y vanguardia, expandiendo nuestro alcance y contribuyendo activamente al desarrollo tecnológico de nuestra nación. Anhelamos ser el puente que conecta a las personas con las infinitas posibilidades que ofrece la tecnología.
                    </p>
                    </div>
                    <div className="container-about-me-img">
                        <img src="imgs/1.jpg" alt="imagen de empresa 2" />
                    </div>
                </div>
            </div>
        </section>
    )
}
