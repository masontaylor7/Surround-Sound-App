import React, { useState } from "react";
import { newSong } from "../../store/songs";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'

function AddMusicForm({ showModalProp }) {
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const userId = sessionUser.id


    const handleSubmit = async (e) => {
        e.preventDefault();
        const song = { title, url, userId }
        dispatch(newSong(song));
        history.push('/music')
        showModalProp(false);

    };



    return (
        <div className="add-music-form-block">

            <form onSubmit={handleSubmit}>
                <label className="label-and-input">
                    <p>Title</p>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label className="label-and-input">
                    <p>Audio URL</p>
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                    />
                </label>
                <div className="button-block">

                    <button className="publish-song-button" type="submit">Publish Song</button>
                </div>
            </form>
        </div>
    );
}

export default AddMusicForm;
