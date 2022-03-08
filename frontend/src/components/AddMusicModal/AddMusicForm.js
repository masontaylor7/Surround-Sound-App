import React, { useState } from "react";
import { newSong, allSongs } from "../../store/songs";
import { Modal } from '../../context/Modal';
import { useDispatch, useSelector } from "react-redux";

function AddMusicForm({showModal, setShowModal}) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const userId = sessionUser.id
    // const [errors, setErrors] = useState([]);
    // console.log("this is the userId", userId)


    const handleSubmit = async (e) => {
        e.preventDefault();
        const song = { title, url, userId }
        dispatch(newSong(song));
        setShowModal(!showModal)
    };



    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {/* {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))} */}
            </ul>
            <label>
                Title
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            <label>
                URL
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
            </label>
            <button type="submit" onClick={() => setShowModal(false)}>Publish Song</button>
        </form>
    );
}

export default AddMusicForm;
