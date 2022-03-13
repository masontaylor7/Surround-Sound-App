import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './IndividualPlaylist.css'
import playlistReducer from '../../store/playlists';



function IndividualPlaylist() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id

    return (
        <div className='individual-playlist-block'>
            <h1>IndividualPlaylist page</h1>
            <NavLink to={`/users/${userId}/playlists`} className='navlink'>Back to playlists</NavLink>

        </div>
    )
}

export default IndividualPlaylist;
