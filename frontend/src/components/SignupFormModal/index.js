import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';
import '../Navigation/Navigation.css'

function SignupFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='signup-button-block' onClick={() => setShowModal(true)}><p className='signup-text'>Sign Up</p></button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignupForm />
                </Modal>
            )}
        </>
    );
}

export default SignupFormModal
