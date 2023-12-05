import React, {Fragment, useState} from 'react';
import "../Styles/Opinion.css"

const Opinion = ()=>
{
    const [review, setReview] = useState({
        name: '',
        email: '',
        rating: '',
        comment: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Opinión enviada:', review);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setReview({
            ...review,
            [name]: value
        });
    };

    return (
        <Fragment>
        <form onSubmit={handleSubmit} className="form d-flex flex-column align-items-center">

            <div className="mb-3">
                <h3 className="label">
                    Nombre</h3>
                    <input
                        className="input form-control"
                        type="text"
                        name="name"
                        value={review.name}
                        onChange={handleChange}
                        required
                        placeholder="Nombre"
                    />

            </div>
            <div className="mb-3">
                <h3 className="label">
                    Correo electrónico</h3>
                    <input
                        className="input form-control"
                        type="email"
                        name="email"
                        value={review.email}
                        onChange={handleChange}
                        required
                        placeholder="Correo electrónico"
                    />

            </div>

            <h3 className="label">Calificación:</h3>
            <div className="radiosform">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="radios" id="labelradios" value="option1" checked />
                        <h5 className="form-check-label" htmlFor="labelradios">
                            Pésimo
                        </h5>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="radios" id="labelradios" value="option1" checked/>
                        <h5 className="form-check-label" htmlFor="labelradios">
                            Malo
                        </h5>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="radios" id="labelradios" value="option1" checked/>
                        <h5 className="form-check-label" htmlFor="labelradios">
                            Normal
                        </h5>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="radios" id="labelradios" value="option1" checked/>
                        <h5 className="form-check-label" htmlFor="labelradios">
                            Bueno
                        </h5>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="radios" id="labelradios" value="option1" checked/>
                        <h5 className="form-check-label" htmlFor="labelradios">
                            Excelente
                        </h5>
                </div>
            </div>

            <div className="mb-3">
                <h3 className="label">
                    Comentario</h3>
                    <textarea
                        className="input form-control textarea"
                        name="comment"
                        value={review.comment}
                        onChange={handleChange}
                        required
                        maxLength="450"
                        placeholder="Comentario"
                        rows={5} // Número de filas
                        cols={50}
                    ></textarea>

            </div>

            <button className="btn btn-primary" type="submit">Enviar Opinión</button>
        </form>
        </Fragment>
    );

}

export default Opinion