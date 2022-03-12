import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className='main-body'>
            <h1 className='welcome'>Welcome to Surround<span className='sound-text'>Sound</span>!</h1>
            <div className='list-block'>
                <p>A place for your own <span>creations</span>,</p>
                <p>where you can ustomize <span>playlists</span> to <div>save your favorite tracks,</div></p>
                <p>Discover new <span>music</span>!</p>
            </div>

            <img className='crowd-png' src='https://i.dlpng.com/static/png/4826358_preview_preview.png' alt='' />
        </div>
    )
}

export default HomePage;
