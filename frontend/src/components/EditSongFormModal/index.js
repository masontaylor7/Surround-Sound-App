import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { EditSongForm } from './EditSongForm';

function EditSongFormModal({ title, url, songId }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditSongForm title={title} url={url} songId={songId}/>
                </Modal>
            )}
        </>
    );

}

export default EditSongFormModal;
