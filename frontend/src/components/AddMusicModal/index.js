import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import './AddMusic.css';
import AddMusicForm from './AddMusicForm';

function AddMusicModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button className='publish-button-block' onClick={() => setShowModal(true)}><p className='publish-text'>Publish a New Song</p></button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddMusicForm showModalProp={setShowModal}/>
                </Modal>
            )}
        </div>
    )
}


export default AddMusicModal;
