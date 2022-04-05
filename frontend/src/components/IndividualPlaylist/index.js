import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { allSongsInPlaylist } from '../../store/playlist-songs';
import './IndividualPlaylist.css'



function IndividualPlaylist() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const { playlistId } = useParams()
    const playlist = useSelector(state => state.playlists[+playlistId])
    console.log('this is the playlist', playlist)

    const userId = sessionUser.id
    // console.log('this is the id', playlistId)

    useEffect(() => {
        dispatch(allSongsInPlaylist(playlistId))
    }, [dispatch])

    return (
        <div className='individual-playlist-block'>
            <h1>Music</h1>
            <img className='sound-board' src='https://www.shareicon.net/data/256x256/2016/08/18/815896_music_512x512.png' />
            <NavLink to={`/users/${userId}/playlists`} className='navlink'>Back to playlists</NavLink>
            <div className='each-song-in-playlist'>
                {/* {songs?.map(song => (
                    <div key={song.songId}>{song.songId}</div>
                ))} */}
            </div>

        </div>
    )
}

export default IndividualPlaylist;
