
const GET_SONGS = 'songs/getSongs';

export const getSongs = () => {
    return {
        type: GET_SONGS,
    }
}

export const allSongs = () => async(dispatch) => {
    const response = await fetch('/api/songs')
    const data = await response.json();
    console.log("data", data)
    dispatch(getSongs(data))
}


const initialState = { songs: null }

const songsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_SONGS:
            newState = { ...state }
            newState.songs = action.songs
        default:
            return state;
    }
}

export default songsReducer;
