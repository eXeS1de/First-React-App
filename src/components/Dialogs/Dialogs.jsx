import React from "react";
import { NavLink } from "react-router-dom";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../Redux/state";
import css from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={css.dialog}>
      <NavLink to={"/Dialogs/" + props.id} activeClassName={css.active}>{props.name}</NavLink>
    </div>
  )
}

const MessageItem = (props) => {
  return (
    <div className={css.message}>
      {props.message}
    </div>

  )
}

const Dialogs = (props) => {

  let newMessageElement = React.createRef();
  
  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = props.dialogsPage.messages.map(m => <MessageItem message={m.message} />);

  let addMessage = () => {
    props.dispatch(addMessageActionCreator())
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value
    props.dispatch(updateNewMessageTextActionCreator(text))
  }

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={css.messages}>
          <div>
            {messagesElements}
          </div>
          <div><textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}></textarea></div>
          <div><button onClick={addMessage}>Add Post</button></div>
      </div>
    </div>
  )
};
  
export default Dialogs;
