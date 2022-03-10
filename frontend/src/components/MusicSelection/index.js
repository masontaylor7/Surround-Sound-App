import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { allSongs, deleteSong, editSong } from '../../store/songs';
import EditSongFormModal from '../EditSongFormModal';
import './MusicSelection.css'

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



    return (
        <div className='music-section-block'>
            <h1>Music Selection</h1>
            <div className='music-list-block'>
                { songsArr?.map(song => (
                    <div key={song.id} className='single-song-block'>
                        <span className='song-title'>{song.title}
                        </span>
                        <span className='atist-name'
                        >{song.User.username}
                        </span>

                        {sessionUser && sessionUser.id === song.userId ? <button type='button' onClick={() => {
                            const confirm = window.confirm("Are you sure you want to delete this song?")
                            if (confirm === true) {
                                dispatch(deleteSong(song.id))
                                history.push('/music')
                            };
                        }}>delete</button> : null}

                        {sessionUser && sessionUser.id === song.userId ? <EditSongFormModal title={song.title} url={song.url} songId={ song.id} /> : null}
                    </div>
                ))}
            </div>
        </div>
    )
}


export default MusicSelection;
