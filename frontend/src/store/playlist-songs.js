import { csrfFetch } from './csrf'

const ADD_TO_PLAYLIST = 'playlist-songs/addToPlaylist'
const ALL_PLAYLIST_SONGS = 'playlist-songs/allPlaylistSongs'


export const addToPlaylist = (entry) => {
    return {
        type: ADD_TO_PLAYLIST,
        entry
    }
}

export const allPlaylistSongs = (entries) => {
    return {
        type: ALL_PLAYLIST_SONGS,
        entries
    }
}

export const allSongsInPlaylist = (playlistId) => async (dispatch) => {
    const response = await csrfFetch(`/api/playlist-songs/${playlistId}`, {
        method: 'GET'
    });
    const data = await response.json();
    // console.log('this is the data in the thunk', data)
    dispatch(allPlaylistSongs(data));
    return response;
}


export const addSongToPlaylist = (entry) => async(dispatch) => {
    console.log("inside addSongToPlaylist thunk", entry)
    const response = await csrfFetch('/api/playlist-songs', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    });
    const data = await response.json();
    if (data === null) {
        return;
    }
    dispatch(addToPlaylist(data))
    return response

}


const initialState = {}

const playlistSongsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ALL_PLAYLIST_SONGS:
            newState = { ...state }
            action.entries.map(entry => {
                return newState[entry.songId] = entry
            })
            return newState
        case ADD_TO_PLAYLIST:
            newState = { ...state }
            newState[action.entry.id] = action.entry
            return newState;
        default:
            return state;
    }
}

export default playlistSongsReducer;
