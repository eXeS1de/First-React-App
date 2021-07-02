import { profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts : [
        { id: 1, message: "Hi how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: "BlaBla", likesCount: 9 },
        { id: 4, message: "DaDa", likesCount: 7 }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {        
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.newPostText, likesCount: 0}]
            }

        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default: 
            return state  
    }
}

// Action creators

export const addPostActionCreator = (newPostText) => {
    return {
        type : ADD_POST,
        newPostText
    }
}

export const setUserProfile = (profile) => {
    return {
        type : SET_USER_PROFILE, 
        profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}


// Thunks

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
      .then(resp => {
        dispatch(setUserProfile(resp.data))
    })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(resp => {
        dispatch(setStatus(resp.data))
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(resp => {
        if (resp.data.resultCode === 0) {
        dispatch(setStatus(status))
        }
    })
}



export default profileReducer