import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Footer() {
    return(
        <>
        <div className="social">
        <a className="mail" rel="noreferrer" href="mailto:Mekenzie.hayford@gmail.com" target="_blank" >
        <FontAwesomeIcon icon={faEnvelope} size="lg"/>
        </a>

        <a className="github" rel="noreferrer" href="https://github.com/mekahay" target="_blank">
        <FontAwesomeIcon icon={faGithub} size="lg"/>
        </a>

        <a className="linkedin" rel="noreferrer" href="https://www.linkedin.com/in/mekenziehayford/"  target="_blank">
        <FontAwesomeIcon icon={faLinkedin} size="lg"/>
        </a>
        </div>
        <p></p>
        <div className="MH-Designs">MekaHay Designs</div>
        </>
    )
}

export default Footer;