import React from 'react';
import AddMusicModal from '../AddMusicModal';
import MusicSelection from '../MusicSelection';


function MusicPage() {
    return (
        <div className='music-page-body'>
            <h1>Browse music, or add your own!</h1>

            <AddMusicModal />
            <MusicSelection />
        </div>
    )
}

export default MusicPage;
