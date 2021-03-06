import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className='main-body'>
            <h1 className='welcome'>Welcome to Surround<span className='sound-text'>Sound</span>!</h1>
            <div className='list-block'>
                <p>Upload your own <span>songs</span>,</p>
                <p>customize personal <span>playlists</span>,</p>
                <p>and discover new <span>music</span>!</p>
            </div>

            <img className='crowd-png' src='https://i.dlpng.com/static/png/4826358_preview_preview.png' alt='' />
        </div>
    )
}

export default HomePage;
