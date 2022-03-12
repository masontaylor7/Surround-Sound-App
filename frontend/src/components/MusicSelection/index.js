import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { allSongs, deleteSong } from '../../store/songs';
import EditSongFormModal from '../EditSongFormModal';
import { AiFillPlayCircle, AiFillPlusSquare } from 'react-icons/ai'
import { TiDelete } from 'react-icons/ti'
import { GiSoundWaves } from 'react-icons/gi'
import AddMusicModal from '../AddMusicModal';

import './MusicSelection.css'
import AddSongToPlaylistModal from '../AddSongToPlaylistModal';

function MusicSelection() {
    const history = useHistory();
    const dispatch = useDispatch();
    const songsObj = useSelector(state => state.songs)
    const sessionUser = useSelector(state => state.session.user);
    const songsArr = Object.values(songsObj)
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");

    useEffect(() => {
        dispatch(allSongs())
    }, [dispatch])

    const playClick = (songId) => {
        console.log('click play button working', songId)
    }

    return (
        <div className='music-section-block'>
            <h1>Music Selection</h1>
            <img className='sound-board' src='https://www.shareicon.net/data/256x256/2016/08/18/815896_music_512x512.png' />
            <div className='add-music-block'>
                <AddMusicModal className='sound-wave' />
            </div>
            <div className='music-list-block'>
                {songsArr?.map(song => (
                    <div key={song.id} className='single-song-block'>
                        <span className='single-song-left-side-block'>
                            <span className='play-block'>
                                <button type='button' className='play-song-button-block' onClick={() => playClick(song.id)}><AiFillPlayCircle className='play-song-button' /></button>
                            </span>
                            <span className='song-info-block'>
                                <span className='song-title'>{song.title}
                                </span>
                                <span className='atist-name-block'
                                ><span className='artist-text'>Aritst: </span> {song.User.username}
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
                            }}><TiDelete className='delete-button-button' /></button> : null}

                            {sessionUser && sessionUser.id === song.userId ? <EditSongFormModal title={song.title} url={song.url} songId={song.id} /> : null}

                            {sessionUser ? <AddSongToPlaylistModal songId={song.id} /> : null}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default MusicSelection;
