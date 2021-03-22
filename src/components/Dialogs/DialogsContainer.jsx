import { connect } from "react-redux"
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../Redux/dialogReducer"
import Dialogs from "./Dialogs"

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text))
    },
    addMessage: () => {
      dispatch(addMessageActionCreator())
    }
  }

}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
