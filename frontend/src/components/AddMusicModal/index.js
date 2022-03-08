import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import './AddMusic.css';
import AddMusicForm from './AddMusicForm';

function AddMusicModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Publish a New Song</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddMusicForm prop={showModal, setShowModal}/>
                </Modal>
            )}
        </div>
    )
}


export default AddMusicModal;
