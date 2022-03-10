import React, { useState } from 'react';
import { editSong } from "../../store/songs";
import { useDispatch, useSelector } from "react-redux";



export function EditSongForm({ title, url, songId }) {
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
    };


    return (
        <form onSubmit={handleEditSubmit}>
            <label>
                Title
                <input
                    type="text"
                    value={newTitle}
                    placeholder={title}
                    onChange={(e) => setNewTitle(e.target.value)}
                    required
                />
            </label>
            <label>
                URL
                <input
                    type="text"
                    value={newUrl}
                    placeholder={url}
                    onChange={(e) => setNewUrl(e.target.value)}
                    required
                />
            </label>
            <button type="submit" onClick={handleEditSubmit}>Update Song</button>
        </form>
    );
}
