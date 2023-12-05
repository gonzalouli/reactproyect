import React, {Fragment} from 'react';

import rodsDB from "../database/rodsDB";
import Rod from "../Components/Rod";
import "../Styles/Lures.css"

const Lures = ()=>
{

    return (
        <Fragment>
            <div className="container">
                {rodsDB.reduce((rows, article, index) => {
                    if (index % 3 === 0) {
                        rows.push([article]);
                    } else {
                        rows[rows.length - 1].push(article);
                    }
                    return rows;
                }, []).map((row, rowIndex) => (
                    <div className="row justify-content-center align-items-center" key={rowIndex}>
                        {row.map((article, colIndex) => (
                            <div className="col-md-4 mb-4" key={colIndex}>
                                <Rod
                                    id={article.id}
                                    precio={article.precio}
                                    nombre={article.nombre}
                                    longitud={article.longitud}
                                    accion={article.accion}
                                    peso={article.peso}
                                    descripcion={article.descripcion}
                                />
                            </div>
                        ))}
                    </div>
                ))
                }
            </div>
        </Fragment>
    )

}

export default Lures