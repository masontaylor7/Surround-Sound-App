import { csrfFetch } from './csrf';

const GET_SONGS = 'songs/getSongs';
const ADD_SONG = 'songs/addSong';
const REMOVE_SONG = 'songs/removeSong'
const EDIT_SONG = 'songs/editOneSong'

export const editOneSong = (song) => {
    return {
        type: EDIT_SONG,
        song
    }
}

export const getSongs = (songs) => {
    return {
        type: GET_SONGS,
        songs
    }
}

export const addSong = (song) => {
    return {
        type: ADD_SONG,
        song
    }
}

export const removeSong = (song) => {
    return {
        type: REMOVE_SONG,
        song
    }
}


export const allSongs = () => async(dispatch) => {
    const response = await fetch('/api/songs', {
        method: 'GET'
    })
    const data = await response.json();
    dispatch(getSongs(data.songs))
    return response;
}

export const newSong = (song) => async (dispatch) => {
    console.log('inside of newSong thunk', song)
    const response = await csrfFetch('/api/songs', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(song),
    });
    const data = await response.json();
    console.log("this is the data", data)
    dispatch(addSong(data));
    return response;
}

export const deleteSong = (songId) => async (dispatch) => {
    console.log('inside of the delete thunk', songId)
    const response = await csrfFetch(`/api/songs/${songId}`, {
        method: "DELETE",
        body: JSON.stringify({songId})
    });
    if (response.ok) {
        const song = await response.json();
        dispatch(removeSong(song));
        return song
    };
};

export const editSong = (song) => async (dispatch) => {

    const response = await csrfFetch(`/api/songs/${song.songId}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(song)
    });

    if (response.ok) {
        const newSong = await response.json();
        dispatch(editOneSong(newSong));
        return newSong;
    }
}


const initialState = {}

const songsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_SONGS:
            newState = { ...state }
            action.songs.map(song => {
                return newState[song.id] = song
            });
            return newState;
        case EDIT_SONG:
            newState = { ...state }
            newState[action.song.id] = action.song
            return newState;
        case ADD_SONG:
            newState = { ...state }
            newState[action.song.id] = action.song
            return newState;
        case REMOVE_SONG:
            newState = { ...state }
            delete newState[action.song.id]
            return newState;
        default:
            return state;
    }
}

export default songsReducer;
