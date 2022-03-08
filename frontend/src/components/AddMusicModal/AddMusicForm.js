import React, { useState } from "react";
import newSong from "../../store/songs";
import { useDispatch, useSelector } from "react-redux";

function AddMusicForm() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [errors, setErrors] = useState([]);
    const sessionUser = useSelector(state => state.session.user);



    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(newSong({ title, url, userId: sessionUser.id })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
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
            <button type="submit">Publish Song</button>
        </form>
    );
}

export default AddMusicForm;
