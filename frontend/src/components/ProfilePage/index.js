import React from 'react';
import AddMusicModal from '../AddMusicModal';
import MusicSelection from '../MusicSelection';


function ProfilePage() {
    return (
        <div className='profile-page-body'>
            <AddMusicModal />
            <MusicSelection />
        </div>
    )
}

export default ProfilePage;
