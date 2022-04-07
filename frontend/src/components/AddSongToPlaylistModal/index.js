import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import './AddSongToPlaylist.css';
import AddSongToPlaylistForm from './AddSongToPlaylistForm';
import { AiFillPlayCircle, AiFillPlusSquare } from 'react-icons/ai'

function AddSongToPlaylistModal({ songId }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button className='add-song-button-block' onClick={() => setShowModal(true)}><AiFillPlusSquare title='add song to playlist' className='add-to-playlist-button' /></button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddSongToPlaylistForm songId={songId} showModalProp={setShowModal} />
                </Modal>
            )}
        </div>
    )
}


export default AddSongToPlaylistModal;
