import React, { useState } from "react";
import { editPlaylist } from "../../store/playlists";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'

function EditPlaylistForm({ name, imageUrl, notViewable, playlistId, showModalProp }) {
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [newName, setNewName] = useState(name);
    const [newImageUrl, setNewImageUrl] = useState(imageUrl);
    const [updateNotViewable, setUpdateNotViewable] = useState(notViewable)
    const userId = sessionUser.id


    const handleSubmit = async (e) => {
        e.preventDefault();
        const playlist = { newName, newImageUrl, updateNotViewable, userId, playlistId }
        dispatch(editPlaylist(playlist))
        history.push(`/users/${userId}/playlists`)
        showModalProp(false)
    };



    return (
        <div className="edit-playlist-form-block">

            <form onSubmit={handleSubmit}>
                <label className="label-and-input">
                    <p>Name</p>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        required
                    />
                </label>
                <label className="label-and-input">
                    <p>Image URL</p>
                    <input
                        type="text"
                        value={newImageUrl}
                        onChange={(e) => setNewImageUrl(e.target.value)}
                    />
                </label>
                <label className="label-and-input">
                    <p>Private or Public</p>
                    <select
                        value={updateNotViewable}
                        onChange={(e) => setUpdateNotViewable(e.target.value)}
                        required>
                        <option value={true}>private</option>
                        <option value={false}>public</option>
                    </select>
                </label>
                <div className="update-playlist-button-block">
                    <button type="submit" className="update-playlist-button">Update Playlist</button>
                </div>
            </form>
        </div>
    );
}

export default EditPlaylistForm;
