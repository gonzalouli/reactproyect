import React, {Fragment} from 'react';

import reelDB from "../database/reelsDB";
import Reel from "../Components/Reel";
import "../Styles/Lures.css"

const Reels = ()=>
{

    return (
        <Fragment>
            <div className="container">
                {reelDB.reduce((rows, article, index) => {
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
                                <Reel
                                    id={article.id}
                                    nombre={article.nombre}
                                    precio={article.precio}
                                    tamanio={article.tamanio}
                                    capacidad={article.capacidad}
                                    peso={article.peso}
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

export default Reels