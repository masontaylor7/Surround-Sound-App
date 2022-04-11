import { csrfFetch } from './csrf'

const ADD_TO_PLAYLIST = 'playlist-songs/addToPlaylist'
const ALL_PLAYLIST_SONGS = 'playlist-songs/allPlaylistSongs'
const REMOVE_FROM_PLAYLIST = 'playlist-songs/removeSingleSong'
const ALL_DATA = 'playlist-songs/allTableData'


export const allTableData = (data) => {
    return {
        type: ALL_DATA,
        data
    }
}

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

export const removeSingleSong = (song) => {
    return {
        type: REMOVE_FROM_PLAYLIST,
        song
    }
}

export const allSongsInPlaylist = (playlistId) => async (dispatch) => {
    const response = await csrfFetch(`/api/playlist-songs/${playlistId}`, {
        method: 'GET'
    });
    const data = await response.json();
    dispatch(allPlaylistSongs(data));
    return data;
}

export const removeFromPlaylist = (songId, playlistId) => async (dispatch) => {
    // console.log("inside removeFromPlaylist thunk", songId, playlistId)
    const response = await csrfFetch(`/api/playlist-songs/${playlistId}/${songId}`, {
        method: "DELETE",
        body: JSON.stringify({ songId, playlistId })
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(removeSingleSong(data));
        return data;
    }
}

export const allData = () => async (dispatch) => {
    const response = await fetch('/api/playlist-songs', {
        method: 'GET'
    })
    const data = await response.json();
    dispatch(allTableData(data.data))
    return response;
}


export const addSongToPlaylist = (entry) => async (dispatch) => {
    // console.log("inside addSongToPlaylist thunk", entry)
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
        case ALL_DATA:
            newState = { ...state }
            action.data.map((entry, i) => {
                return newState[i] = entry
            })
            return newState;
        case ALL_PLAYLIST_SONGS:
            newState = { ...state }
            action.entries.map(entry => {
                return newState[entry.id] = entry
            })
            return newState;
        case ADD_TO_PLAYLIST:
            newState = { ...state }
            newState[action.entry.id] = action.entry
            return newState;
        case REMOVE_FROM_PLAYLIST:
            newState = { ...state }
            delete newState[action.song.id]
            return newState;
        default:
            return state;
    }
}

export default playlistSongsReducer;
