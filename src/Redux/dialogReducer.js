const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

let initialState = {
    dialogs : [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ],
    messages : [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your IT?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageText: ''
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return { 
                ...state,
                newMessageText: action.newText 
            }

        case ADD_MESSAGE: 
            return {
                ...state,
                newMessageText: '',
                messages: [ ...state.messages, {id: 5, message: state.newMessageText} ]
            }
        
        default: 
            return state
    }
}

export const addMessageActionCreator = () => {
    return {
        type : ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type : UPDATE_NEW_MESSAGE_TEXT, newText : text
    }
}

export default dialogReducer