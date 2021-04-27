const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USERS_PROFILE';

let initialState = {
    posts : [
        { id: 1, message: "Hi how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: "BlaBla", likesCount: 9 },
        { id: 4, message: "DaDa", likesCount: 7 }
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {        
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 5, message: state.newPostText, likesCount: 0}]
            }

        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile
            }
        default: 
            return state  
    }
}

export const addPostActionCreator = () => {
    return {
        type : ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type : UPDATE_NEW_POST_TEXT, 
        newText: text 
    }
}

export const setUserProfile = (profile) => {
    return {
        type : SET_USER_PROFILE, 
        profile
    }
}

export default profileReducer