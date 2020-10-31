import React from 'react';

import '../../styles/layout/session_footer.css';

const SessionFooter = () => {
    return (
        <footer className="footer">
            <p className="footer-text">Universidad Politécnica Territorial del Estado Trujillo<br/>"Mario Briceño Iragorry"</p>
            <img className="footer-image" src="./assets/images/upttmbi.svg" alt="Logo de UPTT Mario Briceño Iragorry" />
        </footer>
    );
}

export default SessionFooter;