import React, { useState } from 'react';
import { editSong } from "../../store/songs";
import { useDispatch, useSelector } from "react-redux";




export function EditSongForm({ title, url, songId, showModalProp }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [newTitle, setNewTitle] = useState(title);
    const [newUrl, setNewUrl] = useState(url);
    const userId = sessionUser.id

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const song = { newTitle, newUrl, userId, songId }
        // console.log(song, 'frontenddddddd')
        dispatch(editSong(song));
        showModalProp(false);
    };


    return (
        <div className='edit-song-form-block'>

            <form onSubmit={handleEditSubmit}>
                <label className="label-and-input">
                    <p>Title</p>
                    <input
                        type="text"
                        value={newTitle}
                        placeholder={title}
                        onChange={(e) => setNewTitle(e.target.value)}
                        required
                    />
                </label>
                <label className="label-and-input">
                    <p>Audio Url</p>
                    <input
                        type="text"
                        value={newUrl}
                        placeholder={url}
                        onChange={(e) => setNewUrl(e.target.value)}
                        required
                    />
                </label>
                <div className="button-block">

                    <button type="submit" className="update-song-button" onClick={handleEditSubmit}>Update Song</button>
                </div>
            </form>
        </div>
    );
}
