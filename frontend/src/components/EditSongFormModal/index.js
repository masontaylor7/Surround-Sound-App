import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { EditSongForm } from './EditSongForm';
import { RiEditBoxLine } from 'react-icons/ri'
import './EditSongForm.css'

function EditSongFormModal({ title, url, songId }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button className='edit-song-button-block' onClick={() => setShowModal(true)}><RiEditBoxLine title='edit song'  className='edit-song-button'/></button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditSongForm title={title} url={url} songId={songId} showModalProp={setShowModal}/>
                </Modal>
            )}
        </>
    );

}

export default EditSongFormModal;
