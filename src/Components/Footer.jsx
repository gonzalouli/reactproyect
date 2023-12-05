import React from 'react';
import "../Styles/footer.css"
function Footer() {
    const companyName = 'MyFishingSpot';
    const email = 'info@myfishingspot.com';
    const phoneNumber = '+34 558 85 55 69';
    const currentYear = new Date().getFullYear();
    const fakeCopyright = `© ${currentYear} ${companyName}. Todos los derechos reservados`;

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Contacto</h2>
                        <p>
                            <strong>Nombre:</strong> {companyName}<br />
                            <strong>Email:</strong> {email}<br />
                            <strong>Teléfono:</strong> {phoneNumber}
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p className="text-right">{fakeCopyright}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;