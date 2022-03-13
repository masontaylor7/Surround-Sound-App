import { csrfFetch } from './csrf';

const GET_PLAYLISTS = 'playlists/getPlaylists';
const ADD_PLAYLIST = 'playlists/addPlaylist'
const REMOVE_PLAYLIST = 'playlists/removePlaylist'
const EDIT_PLAYLIST =  'playlists/editOnePlaylist'

export const getPlaylists = (playlists) => {
    return {
        type: GET_PLAYLISTS,
        playlists
    }
}

export const addPlaylist = (playlist) => {
    return {
        type: ADD_PLAYLIST,
        playlist
    }
}

export const removePlaylist = (playlist) => {
    return {
        type: REMOVE_PLAYLIST,
        playlist
    }
}

export const editOnePlaylist = (playlist) => {
    return {
        type: EDIT_PLAYLIST,
        playlist
    }
}

export const myPlaylists = (userId) => async (dispatch) => {
    const response = await fetch(`/api/playlists/user/${userId}`, {
        method: 'GET'
    })
    const data = await response.json();
    dispatch(getPlaylists(data.playlists))
    return response;
}

export const createPlaylist = (playlist) => async (dispatch) => {
    console.log("inside of playlist thunk")
    const response = await csrfFetch('/api/playlists', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(playlist)
    });
    const data = await response.json();
    console.log('this is the playlist data', data)
    dispatch(addPlaylist(data));
    return response;
}

export const deletePlaylist = (playlistId) => async (dispatch) => {
    console.log('inside of playlist delete thunk')
    const response = await csrfFetch(`/api/playlists/${playlistId}`, {
        method: 'DELETE',
        body: JSON.stringify({ playlistId })
    });
    if (response.ok) {
        const playlist = await response.json();
        dispatch(removePlaylist(playlist));
        return playlist;
    }
}

export const editPlaylist = (playlist) => async (dispatch) => {
    console.log('inside edit playlist thunk')
    const response = await csrfFetch(`/api/playlists/${playlist.playlistId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(playlist)
    });
    if (response.ok) {
        const newPlaylist = await response.json();
        dispatch(editOnePlaylist(newPlaylist))
        return newPlaylist;
    }
}


const initialState = {}

const playlistReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_PLAYLISTS:
            newState = { ...state }
            action.playlists.map(playlist => {
                return newState[playlist.id] = playlist
            });
            return newState;
        case EDIT_PLAYLIST:
            newState = { ...state }
            newState[action.playlist.id] = action.playlist
            return newState;
        case ADD_PLAYLIST:
            newState = { ...state }
            newState[action.playlist.id] = action.playlist
            return newState;
        case REMOVE_PLAYLIST:
            newState = { ...state }
            delete newState[action.playlist.id]
            return newState;
        default:
            return state
    }
}

export default playlistReducer;
