import dialogReducer from "./dialogReducer"
import profileReducer from "./profileReducer"
import usersReducer from "./usersReducer"

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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)

        this._render(this._state)
    }
}

export default store
window.store = store