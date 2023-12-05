import React, { useState, useEffect } from 'react';

const Popup = ({ show, message }) => {

    return (
        <div className="alert alert-success" role="alert">
            {message}
        </div>
    );

};

export default Popup;