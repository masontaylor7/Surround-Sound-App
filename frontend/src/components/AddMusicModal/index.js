import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import './AddMusic.css';
import AddMusicForm from './AddMusicForm';

function AddMusicModal() {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector((state) => state.session.user);

    return (
        <div>
            {sessionUser ? <button className='publish-button-block' onClick={() => setShowModal(true)}><p className='publish-text'>Publish a New Song</p></button> : null}
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddMusicForm showModalProp={setShowModal}/>
                </Modal>
            )}
        </div>
    )
}


export default AddMusicModal;
