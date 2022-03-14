import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { allSongsInPlaylist } from '../../store/playlist-songs';
import './IndividualPlaylist.css'



function IndividualPlaylist() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const playlistSongsObj = useSelector(state => state.playlistSongs)
    const playlistSongsArr = Object.values(playlistSongsObj)
    const userId = sessionUser.id
    const { playlistId } = useParams()

    useEffect(() => {
        dispatch(allSongsInPlaylist(playlistId))
    }, [dispatch])

    return (
        <div className='individual-playlist-block'>
            <h1>Saved Music</h1>
            <img className='sound-board' src='https://www.shareicon.net/data/256x256/2016/08/18/815896_music_512x512.png' />
            <NavLink to={`/users/${userId}/playlists`} className='navlink'>Back to playlists</NavLink>
            <div className='each-song-in-playlist'>
                {playlistSongsArr?.map(entry => (
                    <div key={entry.songId}>{entry}</div>
                ))}
            </div>

        </div>
    )
}

export default IndividualPlaylist;
