import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import AudioPlayer from '../AudioPlayer';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-block'>
            <div className='logo-block'>
                <div className='footer-logo'>
                    <p>footer logo</p>
                </div>
            </div>
            <div className='audio-player-block'>
                <AudioPlayer />
            </div>
            <div className='footer-right-block'>
                <div>footer right</div>
            </div>
        </div>
    );
}

export default Footer;
