const SEND_MESSAGE = 'SEND_MESSAGE';

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
    ]
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: 
            return {
                ...state,
                messages: [ ...state.messages, {id: 6, message: action.newMessageBody} ]
            }
        
        default: 
            return state
    }
}

export const sendMessage = (newMessageBody) => {
    return {
        type : SEND_MESSAGE,
        newMessageBody

    }
}

export default dialogReducer