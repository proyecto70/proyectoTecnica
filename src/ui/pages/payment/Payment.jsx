import "./Payment.css"
import { useState, useEffect } from "react"
import { StepContainer } from "../../components/step/StepContainer"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { contextAppCreate } from "../../../domain/context/app/ProviderApp"

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateZip = (zip) => {
    return /^\d{5}(-\d{4})?$/.test(zip);
}

const validateCard = (card) => {
  return /^\d{12,19}$/.test(card);
}

const validateCVV = (cvv) => {
  return /^\d{3,4}$/.test(cvv);
}

const validateDate = (date) => {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!dateRegex.test(date)) {
        return false;
    }

    const [day, month, year] = date.split('/').map(Number);
    const currentDate = new Date();
    const inputDate = new Date(year, month - 1, day);

     if (inputDate > currentDate) {
        return false;
    }
    return true;
};

export const Payment = () => {

    const {dispatch} = useContext(contextAppCreate);

    const [activateStyleStep, setActivateStyleStep] = useState({
        1: true,
        2: false,
        3: false
    });
    const [currentForm, setCurrentForm] = useState(1);
    const [formDirection, setFormDirection] = useState('next');
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zip: '',
        card: '',
        expiry: '',
        cvv: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zip: '',
        card: '',
        expiry: '',
        cvv: ''
    });

    useEffect(() => {
        setFormStyle(1, 0);
        setFormStyle(2, 100);
        setFormStyle(3, 100);
    }, []);

    const [formStyles, setFormStyles] = useState({
        1: { transform: 'translateX(0%)', transition: 'all 0.5s ease-in-out', position: 'absolute' },
        2: { transform: 'translateX(100%)', transition: 'all 0.5s ease-in-out', position: 'absolute' },
        3: { transform: 'translateX(100%)', transition: 'all 0.5s ease-in-out', position: 'absolute' },
    });

    const setFormStyle = (formNumber, translateX) => {
        setFormStyles(prevStyles => ({
            ...prevStyles,
            [formNumber]: {
                ...prevStyles[formNumber],
                transform: `translateX(${translateX}%)`,
            },
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    const validateForm1 = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if (!formData.name) {
            newErrors.name = 'Este campo es requerido';
            isValid = false;
        }
        if (!formData.email) {
            newErrors.email = 'Este campo es requerido';
            isValid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Correo electrónico no válido';
            isValid = false;
        }
        if (!formData.phone) {
            newErrors.phone = 'Este campo es requerido';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const validateForm2 = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if (!formData.address) {
            newErrors.address = 'Este campo es requerido';
            isValid = false;
        }
        if (!formData.city) {
            newErrors.city = 'Este campo es requerido';
            isValid = false;
        }
        if (!formData.zip) {
            newErrors.zip = 'Este campo es requerido';
            isValid = false;
        } else if (!validateZip(formData.zip)) {
            newErrors.zip = 'Código postal no válido';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

      const validateForm3 = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if (!formData.card) {
            newErrors.card = 'Este campo es requerido';
            isValid = false;
        } else if (!validateCard(formData.card)){
            newErrors.card = 'Número de tarjeta no válido';
            isValid = false;
        }
        if (!formData.expiry) {
            newErrors.expiry = 'Este campo es requerido';
            isValid = false;
        } else if (!validateDate(formData.expiry)) { // Usa validateDate
            newErrors.expiry = 'Fecha no válida. Debe ser DD/MM/AAAA y no puede ser una fecha futura.';
            isValid = false;
        }
        if (!formData.cvv) {
            newErrors.cvv = 'Este campo es requerido';
            isValid = false;
        } else if (!validateCVV(formData.cvv)) {
            newErrors.cvv = 'CVV no válido';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };


    const handleNextForm = () => {
        let isValid = false;
        if(currentForm === 1) {
            isValid = validateForm1();
        } else if (currentForm === 2) {
            isValid = validateForm2();
        }

        if (isValid) {
            setFormDirection('next');
            setFormStyle(currentForm, -100);
            setFormStyle(currentForm + 1, 0);
            setCurrentForm(currentForm + 1);
            setActivateStyleStep(prev => {
                const nextState = { ...prev };
                nextState[currentForm] = false;
                nextState[currentForm + 1] = true;
                return nextState;
            });
        }
    };

    const handlePreviousForm = () => {
        if (currentForm > 1) {
            setFormDirection('prev');
            setFormStyle(currentForm, 100);
            setFormStyle(currentForm - 1, 0);

            setCurrentForm(currentForm - 1);
            setActivateStyleStep(prev => {
                const nextState = { ...prev };
                nextState[currentForm] = false;
                nextState[currentForm - 1] = true;
                return nextState;
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validateForm3();
        if (isValid) {
            console.log(`Final Form Data:`, formData);
            alert("SE PROCESO SU PAGO SATIFACTORIAMENTE, GRACIAS POR PREFERIRNOS")
            dispatch({type: "SET_ACTIVATE_CART", payload: false});
            dispatch({type: "SET_CLEAR_CART_SHOP"});
            handlerClosePayment();
        }
    }

    const handlerClosePayment = () => {
        navigate("/project-tecnica/");
    }

    return (
        <main>
            <section className="container-payment">
                <i onClick={handlerClosePayment} className="fa-solid fa-arrow-left"> volver</i>
                <section className="section-continued">
                    <h2>Pasos para realizar la compra</h2>
                    <div className="container-list-steps">
                        <StepContainer
                            activateStyleStep={activateStyleStep[1]}
                            text="Datos Personales"
                        />
                        <StepContainer
                            activateStyleStep={activateStyleStep[2]}
                            text="Datos de Envío"
                        />
                        <StepContainer
                            activateStyleStep={activateStyleStep[3]}
                            text="Datos del Pago"
                        />
                    </div>
                </section>
                <section className="section-forms" style={{ position: 'relative', height: '100%' }}>
                    <form
                        onSubmit={handleSubmit}
                        style={formStyles[1]}
                        className="container-form"
                        key={1}
                    >
                        <h2>Datos Personales</h2>
                        <div className="container-form-data">
                            <label htmlFor="name">{errors.name || "Nombre completo"}</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="container-form-data">
                            <label htmlFor="email">{errors.email || "Correo electrónico"}</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="container-form-data">
                            <label htmlFor="phone">{errors.phone || "Número de teléfono"}</label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="container-buttons">
                            <button type="button" onClick={handlePreviousForm} disabled={currentForm === 1}>
                                Anterior
                            </button>
                            <button type="button" onClick={handleNextForm}>
                                Siguiente
                            </button>
                        </div>
                    </form>
                    <form
                        onSubmit={handleSubmit}
                        style={formStyles[2]}
                        className="container-form"
                        key={2}
                    >
                        <h2>Datos de envio</h2>
                        <div className="container-form-data">
                            <label htmlFor="address">{errors.address || "Dirección"}</label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="container-form-data">
                            <label htmlFor="city">{errors.city || "Ciudad"}</label>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                value={formData.city}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="container-form-data">
                            <label htmlFor="zip">{errors.zip || "Código Postal"}</label>
                            <input
                                type="text"
                                name="zip"
                                id="zip"
                                value={formData.zip}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="container-buttons">
                            <button type="button" onClick={handlePreviousForm}>
                                Anterior
                            </button>
                            <button type="button" onClick={handleNextForm}>
                                Siguiente
                            </button>
                        </div>
                    </form>
                    <form
                        onSubmit={handleSubmit}
                        style={formStyles[3]}
                        className="container-form"
                        key={3}
                    >
                        <h2>Datos de pago</h2>
                        <div className="container-form-data">
                            <label htmlFor="card">{errors.card || "Número de Tarjeta"}</label>
                            <input
                                type="text"
                                name="card"
                                id="card"
                                value={formData.card}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="container-form-data">
                            <label htmlFor="expiry">{errors.expiry || "Fecha de Expiración"}</label>
                            <input
                                type="text"
                                name="expiry"
                                id="expiry"
                                placeholder="DD/MM/AAAA"
                                value={formData.expiry}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="container-form-data">
                            <label htmlFor="cvv">{errors.cvv || "CVV"}</label>
                            <input
                                type="text"
                                name="cvv"
                                id="cvv"
                                value={formData.cvv}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="container-buttons">
                            <button type="button" onClick={handlePreviousForm}>
                                Anterior
                            </button>
                            <button type="submit" onClick={handleSubmit}>Finalizar</button>
                        </div>
                    </form>
                </section>
            </section>
        </main>
    );
};
