import React, { useEffect, useState } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { csrfFetch } from '../../store/csrf';

import { myPlaylists } from '../../store/playlists';
import { allSongs, deleteSong } from '../../store/songs';
import EditSongFormModal from '../EditSongFormModal';
import AddSongToPlaylistModal from '../AddSongToPlaylistModal';

import { TiDelete } from 'react-icons/ti'
import { FiPlayCircle } from 'react-icons/fi'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { MdCancelPresentation } from 'react-icons/md'

import './IndividualPlaylist.css'



function IndividualPlaylist({ setTitle, setUrl }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const { playlistId } = useParams()
    const playlist = useSelector(state => state.playlists[+playlistId])


    const userId = sessionUser.id

    useEffect(() => {
        // dispatch(allSongs())
        dispatch(myPlaylists(userId))
    }, [dispatch])

    const playClick = (songTitle, songUrl) => {
        // setNewTitle(songTitle);
        // setNewUrl(songUrl);
        setTitle(songTitle)
        setUrl(songUrl)
    }

    const fetchArtistName = async (userId) => {
        const response = await csrfFetch(`/api/users/${userId}`)
        const user = await response.json();
        console.log(typeof user.user.username)
        return(user.user.username)
    }

    return (
        <div className='music-section-block'>
            <h1>{sessionUser?.username}'s {playlist?.name}</h1>
            <img className='sound-board' src='https://www.shareicon.net/data/256x256/2016/08/18/815896_music_512x512.png' />
            <div className='add-music-block'>
                <NavLink to={`/users/${userId}/playlists`} className='back-to-playlist-button-block'><AiOutlineArrowLeft className='back-arrow-button' /><p className='back-text'>Back To Playlists</p></NavLink>
            </div>
            <div className='music-list-block'>
                    {playlist?.Songs?.map(song => (
                        <div key={song.id} className='single-song-block'>
                            <span className='single-song-left-side-block'>
                                <span className='play-block'>
                                    <button type='button' className='play-song-button-block' onClick={() => playClick(song.title, song.url)}><FiPlayCircle className='play-song-button' /></button>
                                </span>
                                <span className='song-info-block'>
                                    <span className='song-title'>{song.title}
                                    </span>
                                    <span className='atist-name-block'
                                    ><span className='artist-text'>Artist: </span>
                                        {song.User.username}
                                    </span>
                                </span>
                            </span>

                            <span className='song-right-side-button-block'>
                                {sessionUser && sessionUser.id === song.userId ? <button type='button' className='delete-song-button-block' onClick={() => {
                                    const confirm = window.confirm("Are you sure you want to delete this song?")
                                    if (confirm === true) {
                                        dispatch(deleteSong(song.id))
                                        history.push('/music')
                                    };
                                }}><TiDelete title='delete song'  className='delete-button-button' /></button> : null}

                                {sessionUser && sessionUser.id === song.userId ? <EditSongFormModal title={song.title} url={song.url} songId={song.id} /> : null}

                                {sessionUser && sessionUser.id === playlist.userId ? <button type='button' className='remove-song-button-block' onClick={() => {
                                    const confirm = window.confirm("Are you sure you want to remove this song from your playlist?")
                                    if (confirm === true) {
                                        dispatch(deleteSong(song.id))
                                        history.push('/music')
                                    };
                                }}><MdCancelPresentation title='remove song from playlist' className='remove-button' /></button> : null}

                                {sessionUser ? <AddSongToPlaylistModal songId={song.id} /> : null}
                            </span>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default IndividualPlaylist;
