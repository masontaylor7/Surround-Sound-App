import React from 'react';
import MusicSelection from '../MusicSelection';
import './MusicPage.css'


function MusicPage({setTitle, setUrl}) {
    return (
        <div className='music-page-body'>
            <MusicSelection setTitle={setTitle} setUrl={setUrl}/>
        </div>
    )
}

export default MusicPage;
