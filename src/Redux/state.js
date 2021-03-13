const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

let store = {
    _state: {
        profilePage: {
            posts : [
                { id: 1, message: "Hi how are you?", likesCount: 12 },
                { id: 2, message: "It's my first post", likesCount: 11 },
                { id: 3, message: "BlaBla", likesCount: 9 },
                { id: 4, message: "DaDa", likesCount: 7 }
            ],
            newPostText: ''
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state
    },
    _render() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._render = observer
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._render(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._render(this._state)
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._render(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText
            this._render(this._state)
        }
    }

}

export const addPostActionCreator = () => {
    return {
        type : ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type : UPDATE_NEW_POST_TEXT, newText: text 
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

export default store
window.store = store