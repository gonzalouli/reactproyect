import React, {Fragment, useState} from 'react';
import "../Styles/Opinion.css"
import opinionsDB from "../database/opinionsDB";

const Opinion = ()=>
{
    const [review, setReview] = useState({
        nombre: '',
        email: '',
        producto: '',
        comentario: '',
        calificacion: ''
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
                        <div className="mb-3">
                            <h3 className="label">
                                Producto</h3>
                            <input
                                className="input form-control"
                                type="text"
                                name="producto"
                                value={review.email}
                                onChange={handleChange}
                                required
                                placeholder="Nombre del producto"
                            />

                        </div>
                        <h3 className="label">Calificación:</h3>
                        <div className="radiosform">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="radios" id="labelradios" value="option1"  />
                                    <h5 className="form-check-label" htmlFor="labelradios">
                                        Pésimo
                                    </h5>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="radios" id="labelradios" value="option1" />
                                    <h5 className="form-check-label" htmlFor="labelradios">
                                        Malo
                                    </h5>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="radios" id="labelradios" value="option1" />
                                    <h5 className="form-check-label" htmlFor="labelradios">
                                        Normal
                                    </h5>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="radios" id="labelradios" value="option1" />
                                    <h5 className="form-check-label" htmlFor="labelradios">
                                        Bueno
                                    </h5>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="radios" id="labelradios" value="option1" />
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
                                    cols={30}
                                ></textarea>

                        </div>

                        <button className="btn btn-primary" type="submit">Enviar Opinión</button>
                    </form>
            <div className="comment-container d-flex justify-content-center align-items-center">
                <div className="row justify-content-center row-container ">
                        {
                        opinionsDB.map((op,index)=>{
                            return (
                                <div className="card" key={index} >
                                    <div className="card-body">
                                        <h4 className="card-title">{op.producto}</h4>
                                        <h5 className="card-subtitle mb-2 text-muted">Puntuación: {op.calificacion}</h5>
                                        <p className="card-text">
                                            {op.comentario}
                                        </p>
                                        <p className="card-text">Nombre: {op.nombre}</p>
                                    </div>
                                </div>
                            )
                            })
                        }
                </div>
            </div>

        </Fragment>
    );

}

export default Opinion