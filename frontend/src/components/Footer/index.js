import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import AudioPlayer from '../AudioPlayer';
import './Footer.css';

function Footer({title, url}) {
    return (
        <div className='lower-footer-block'>

            <div className='footer-left-block'>
                <img alt='' src='https://cdn.iconscout.com/icon/free/png-256/speaker-1751756-1489642.png' className='speaker-img-left' />
            </div>

            <div className='audio-player-block'>
                <AudioPlayer title={title} url={url}/>
            </div>
            <div className='footer-right-block'>
                <div className='footer-right-block'>
                    <img alt='' src='https://cdn.iconscout.com/icon/free/png-256/speaker-1751756-1489642.png' className='speaker-img-right' />
                </div>
            </div>
        </div>
    );
}

export default Footer;
