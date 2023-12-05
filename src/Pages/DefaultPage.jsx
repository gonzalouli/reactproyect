import React, {Fragment} from 'react'
import "../Styles/DefaultPage.css"


const DefaultPage = ()=>{

    return(
        <Fragment>
            <div className="errorPage">
                <img className="errorImage" alt="error image" src="/resources/errorPage.jpg"></img>
            </div>
            <div className="errorPage">
                <h2>Opps... algo ha ido mal</h2>
            </div>
        </Fragment>
    )


}


export default DefaultPage