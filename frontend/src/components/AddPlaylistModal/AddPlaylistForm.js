import React, { useState } from "react";
// import { newSong } from "../../store/songs";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import { createPlaylist } from "../../store/playlists";
import './AddPlaylistForm.css'

function AddPlaylistForm({ showModalProp }) {
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [notViewable, setNotViewable] = useState(false) // false = private
    const userId = sessionUser.id


    const handleSubmit = async (e) => {
        e.preventDefault();
        const playlist = { name, imageUrl, notViewable, userId }
        dispatch(createPlaylist(playlist))
        history.push(`/users/${userId}/playlists`)
        showModalProp(false)
    };



    return (
        <div className="add-playlist-inner-form-block">

            <form onSubmit={handleSubmit}>
                <label className="label-and-input">
                    <p>Name</p>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label className="label-and-input">
                    <p>Image URL</p>
                    <input
                        type="text"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </label>
                <label className="label-and-input">
                    <p>Private or Public</p>
                    <select
                        value={notViewable}
                        onChange={(e) => setNotViewable(e.target.value)}
                        required>
                        <option value={true}>private</option>
                        <option value={false}>public</option>
                    </select>
                </label>
                <div className="button-block">
                    <button type="submit" className="create-playlist-submit-button">Create Playlist</button>
                </div>
            </form>
        </div>
    );
}

export default AddPlaylistForm;
