import { csrfFetch } from './csrf';

const GET_PLAYLISTS = 'playlists/getPlaylists';

export const getPlaylists = (playlists) => {
    return {
        type: GET_PLAYLISTS,
        playlists
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
        default:
            return state
    }
}

export default playlistReducer;
