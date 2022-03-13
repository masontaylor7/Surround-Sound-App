import React, { useState } from "react";
// import { newSong } from "../../store/songs";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import { createPlaylist } from "../../store/playlists";

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
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label>
                image URL
                <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
            </label>
            <label>
                Private:
                <select
                    value={notViewable}
                    onChange={(e) => setNotViewable(e.target.value)}
                    required>
                    <option value={true}>private</option>
                    <option value={false}>public</option>
                </select>
            </label>
            <button type="submit">Create Playlist</button>
        </form>
    );
}

export default AddPlaylistForm;
