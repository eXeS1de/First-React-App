import { connect } from "react-redux"
import { compose } from "redux"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
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

compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect)
  (Dialogs)

const AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer
