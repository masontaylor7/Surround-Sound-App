import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { RiEditBoxLine } from 'react-icons/ri'
import './EditPlaylistForm.css'
import EditPlaylistForm from './EditPlaylistForm'

function EditPlaylistFormModal({ name, imageUrl, notViewable, playlistId }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button className='edit-playlist-button-block' onClick={() => setShowModal(true)}><RiEditBoxLine className='edit-playlist-button' /></button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditPlaylistForm className='edit-playlist-button' name={name} imageUrl={imageUrl} notViewable={notViewable} playlistId={playlistId} showModalProp={setShowModal} />
                </Modal>
            )}
        </>
    );

}

export default EditPlaylistFormModal;
