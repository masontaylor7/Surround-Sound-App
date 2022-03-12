import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className='main-body'>
            <h1 className='welcome'>Welcome to Surround<span className='sound-text'>Sound</span>, where the world is your oyster...</h1>
            <div className='list-block'>
                <p>Upload your own <span>music</span>...</p>
                <p>Create <span>playlists</span> to save your favorite tracks...</p>
                <p>Find your new favorites!</p>
            </div>

            <img className='crowd-png' src='https://i.dlpng.com/static/png/4826358_preview_preview.png' alt='' />
        </div>
    )
}

export default HomePage;
