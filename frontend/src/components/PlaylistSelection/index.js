import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { myPlaylists } from '../../store/playlists';

import './PlaylistSelection.css'

function PlaylistSelection() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const playlistsObj = useSelector(state => state.playlists);
    const playlistArr = Object.values(playlistsObj)
    console.log(playlistArr)


    useEffect(() => {
        const userId = sessionUser.id
        dispatch(myPlaylists(userId))
    }, [dispatch])

    return (
        <div className='playlists-selection-block'>
            <h1>Hello from playlists component</h1>
            <img className='sound-board' src='https://www.shareicon.net/data/256x256/2016/08/18/815896_music_512x512.png' />
            <div className='add-playlist-block'>
                {/* enter modal to create playlists */}
            </div>
            <div className='playlist-list-block'>
                {playlistArr?.map(playlist => (
                    <NavLink to={`/users/:userId/playlists/${playlist.id}`}>
                        <div key={playlist.id} className='single-playlist-block'>
                            <div className='playlist-image'><img className='playlist-image' src={playlist.imageUrl === '' ? 'https://upload.wikimedia.org/wikipedia/commons/3/3c/No-album-art.png' : playlist.imageUrl} /></div>
                            <div className='text playlist-name-text'>{playlist.name}</div>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default PlaylistSelection;
