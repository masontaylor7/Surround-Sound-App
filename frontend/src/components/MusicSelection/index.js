import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allSongs } from '../../store/songs';
import './MusicSelection.css'

function MusicSelection() {
    const dispatch = useDispatch();
    const songsObj = useSelector(state => state.songs)
    const sessionUser = useSelector(state => state.session.user);
    const songsArr = Object.values(songsObj)
    console.log('songs obj', songsObj)

    useEffect(() => {
        dispatch(allSongs())
    }, [dispatch])


    return (
        <div className='music-section-block'>
            <h1>Music Selection</h1>
            <div className='music-list-block'>
                {songsArr.map(song => (
                    <div key={song.id} id={song.id} className='single-song-block'>
                        <span className='song-title'>{song.title}
                        </span>
                        <span className='atist-name'
                        >{song.User.username}
                        </span>
                        {sessionUser.id === song.userId ? <button type='button'>this is the erase button</button> : null}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MusicSelection;
