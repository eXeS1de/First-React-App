import React from "react"
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../Redux/dialogReducer"
import StoreContext from "../../StoreContext"
import Dialogs from "./Dialogs"

const DialogsContainer = (props) => {

  return (
    <StoreContext.Consumer>
      { (store) => {
        let state = store.getState().dialogsPage

        let addMessage = () => {
          store.dispatch(addMessageActionCreator())
        }

        let onMessageChange = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text))
        }
        return <Dialogs
                    updateNewMessageText={onMessageChange}
                    addMessage={addMessage}
                    dialogsPage={state}
                    newMessageText={state.newMessageText} />
      }}
    </StoreContext.Consumer>
  )
}

export default DialogsContainer
