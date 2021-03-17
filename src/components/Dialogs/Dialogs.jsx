import React from "react";
import { NavLink } from "react-router-dom";
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
  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = props.dialogsPage.messages.map(m => <MessageItem message={m.message} />);

  let addMessage = () => {
    props.addMessage()
  }

  let onMessageChange = (e) => {
    let text = e.target.value
    props.updateNewMessageText(text)
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
          <div><textarea onChange={onMessageChange} value={props.newMessageText} 
          placeholder='Enter The Matrix'></textarea></div>
          <div><button onClick={addMessage}>Send</button></div>
      </div>
    </div>
  )
};
  
export default Dialogs;
