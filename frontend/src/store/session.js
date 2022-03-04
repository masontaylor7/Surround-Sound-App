import { csrfFetch } from "./csrf"

const SET_USER = 'session/SET_USER'

const setUser = (user) => ({
    type: SET_USER,
    user
})

export const login = (user) => async (dispatch) => {
    const { credential, password } = user
    const response = await csrfFetch('/api/session/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ credential, password })
    });
    if (response.ok) {
        const data = await response.json();
        console.log("this is the data", data)
        dispatch(setUser(data.user));
        return data;
    }

}


const initialState = { user: null }

const sessionReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case SET_USER: {
            return {user: action.user};
        }
        default:
            return state;
    }
}

export default sessionReducer;
