import { csrfFetch } from './csrf';

const GET_SONGS = 'songs/getSongs';
const ADD_SONG = 'songs/addSong';

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
        case ADD_SONG:
            newState = { ...state }
            newState[action.song.id] = action.song
            return newState;
        default:
            return state;
    }
}

export default songsReducer;
