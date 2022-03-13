import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import AddPlaylistForm from './AddPlaylistForm';


function AddPlaylistModal() {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector((state) => state.session.user);

    return (
        <div>
            {sessionUser ? <button className='publish-button-block' onClick={() => setShowModal(true)}><p className='publish-text'>Create a New Playlist</p></button> : null}
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddPlaylistForm showModalProp={setShowModal} />
                </Modal>
            )}
        </div>
    )
}


export default AddPlaylistModal;
