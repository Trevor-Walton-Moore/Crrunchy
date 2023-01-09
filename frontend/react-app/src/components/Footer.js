import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Footer.css'

const Footer = () => {

    return (
        <nav className='Footer'>
            {/* <div> */}
            <NavLink to='/' exact={true} className='crunchy'>
                Crunchy
            </NavLink>
            <div className='footer-socials'>
                <div style={{'font-size': '18px'}}>Trevor Walton Moore</div>
                <div className=''>
                    <a href='https://github.com/Trevor-Walton-Moore'>
                        <i class="fa-brands fa-github" />
                    </a>
                </div>
                <div className=''>
                    <a href='https://www.linkedin.com/in/trevor-w-8aa2a9b4/'>
                        <i class="fa-brands fa-linkedin" />
                    </a>
                </div>

            </div>
            {/* </div> */}
        </nav>
    );
}

export default Footer;
