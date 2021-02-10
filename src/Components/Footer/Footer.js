import React from 'react';
import gmail from './003-gmail.png';
import github from './001-github.png';
import linkedin from './002-linkedin.png';

function Footer() {
    return(
        <>
        <div className="social">
        <a href="mailto:Mekenzie.hayford@gmail.com" target="_blank" >
        <img className="gmail" src={gmail} alt="gmail"/>
        </a>

        <a href="https://github.com/mekahay" target="_blank">
        <img className="github" src={github} alt="github" />
        </a>

        <a href="https://www.linkedin.com/in/mekenziehayford/"  target="_blank">
        <img className="linkedin" src={linkedin} alt="linkedin"/>
        </a>
        </div>
        <p></p>
        <div className="MH-Designs">MekaHay Designs</div>
        </>
    )
}

export default Footer;