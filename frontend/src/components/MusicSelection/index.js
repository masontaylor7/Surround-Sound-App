import React from 'react';
import { useSelector } from 'react-redux';
import { getSongs } from '../../store/songs';
import './MusicSelection.css'

function MusicSelection() {
    const allSongs = useSelector(state => state.songs)
    console.log(allSongs)

    return (
        <h1>Music Selection</h1>
    )
}

export default MusicSelection;
