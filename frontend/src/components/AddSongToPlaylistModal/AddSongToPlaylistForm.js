import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { myPlaylists } from '../../store/playlists';
import { addSongToPlaylist } from '../../store/playlist-songs';
import { FiCheckSquare } from 'react-icons/fi'
import { AiFillCloseSquare } from 'react-icons/ai'

function AddSongToPlaylistForm({ showModalProp, songId }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const playlistsObj = useSelector(state => state.playlists);
    const playlistArr = Object.values(playlistsObj)

    useEffect(() => {
        const userId = sessionUser.id
        dispatch(myPlaylists(userId))
    }, [dispatch])

    const closeAddPlaylist = () => {
        showModalProp(false)
    }

    function addSongFunc(songId, playlistId) {
        const entry = {songId, playlistId}
        dispatch(addSongToPlaylist(entry))
        showModalProp(false)
    }

    return (
        <div className="add-song-to-playlist-modal">
            <div className="modal-inner-block">
                <div className="exit-button-block-top">
                    <button type='button' className="close-button-block" onClick={closeAddPlaylist}><AiFillCloseSquare className="icon close-icon" /></button>
                </div>
                {playlistArr?.map(playlist => (
                    <div key={playlist.id} className='individual-playlist-block'>
                        <div className="left-side-block">
                            <button type='button' className="check-icon-button-block" onClick={() => addSongFunc(songId, playlist.id)}>
                            <div className="icon-div"><FiCheckSquare className="icon check-icon" />
                            </div>
                            </button>
                            <div className="text playlist-name">{playlist.name}</div>
                        </div>
                        <div className="right-side-block">
                            <div className="text playlist-private">{playlist.private ? <p className="private-public-text">private</p> : <p className="private-public-text">public</p>}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AddSongToPlaylistForm;
