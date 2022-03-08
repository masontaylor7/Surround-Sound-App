import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allSongs } from '../../store/songs';
import './MusicSelection.css'

function MusicSelection() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allSongs())
    }, [dispatch])

    const songsObj = useSelector(state => state.songs)
    const songsArr = Object.values(songsObj)
    console.log('songs array', songsArr)

    return (
        <>
            <h1>Music Selection</h1>
            <div className='music-list-block'>
                {songsArr.map(song => (
                    <div key={song.id} id={song.id} className='single-song-block'>
                        <span className='song-title'>{song.title}
                        </span>
                        <span className='atist-name'
                        >{song.User.username}
                        </span></div>
                ))}
            </div>
        </>
    )
}

export default MusicSelection;
