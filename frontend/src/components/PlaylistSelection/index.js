import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { myPlaylists, deletePlaylist } from '../../store/playlists';
import { TiDelete } from 'react-icons/ti'
import EditPlaylistFormModal from '../EditPlaylistFormModal';

import './PlaylistSelection.css'
import AddPlaylistModal from '../AddPlaylistModal';

function PlaylistSelection() {
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const playlistsObj = useSelector(state => state.playlists);
    const playlistArr = Object.values(playlistsObj)
    const userId = sessionUser.id


    useEffect(() => {
        dispatch(myPlaylists(userId))
    }, [dispatch])

    return (
        <div className='playlists-selection-block'>
            <h1>Your Playlists</h1>
            <img className='sound-board' src='https://www.shareicon.net/data/256x256/2016/08/18/815896_music_512x512.png' />
            <div className='add-playlist-block'>
                <AddPlaylistModal className='' />
            </div>
            <div className='playlist-list-block'>
                {playlistArr?.map(playlist => (
                    <div key={playlist.id} className='single-playlist-block'>
                        <NavLink to={`/users/${userId}/playlists/${playlist.id}`} playlistName={playlist.name}>
                            <div className='playlist-image'><img className='playlist-image' src={playlist.imageUrl === '' ? 'https://upload.wikimedia.org/wikipedia/commons/3/3c/No-album-art.png' : playlist.imageUrl} /></div>
                        </NavLink>
                        <div className='lower-single-playlist-block'>

                            <span><NavLink className='text playlist-name-text' to={`/users/${userId}/playlists/${playlist.id}`} playlistName={playlist.name}>{playlist.name}</NavLink>
                            </span>

                            <span className='playlist-button-block'>
                                <button type='button' className='delete-playlist-button-block' onClick={() => {
                                    const confirm = window.confirm("Are you sure you want to delete this song?")
                                    if (confirm === true) {
                                        dispatch(deletePlaylist(playlist.id))
                                        history.push(`/users/${userId}/playlists`)
                                    };
                                }}><TiDelete className='delete-button-button' /></button>

                                {sessionUser && sessionUser.id === playlist.userId ? <EditPlaylistFormModal name={playlist.name} imageUrl={playlist.imageUrl} notViewable={playlist.private} playlistId={playlist.id} /> : null}
                            </span>

                        </div>
                    </div>

                ))}
            </div>
        </div >
    )
}

export default PlaylistSelection;
