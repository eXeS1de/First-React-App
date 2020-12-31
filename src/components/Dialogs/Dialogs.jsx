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

const Message = (props) => {
  return (
    <div className={css.message}>
      {props.message}
    </div>

  )
}

const Dialogs = (props) => {
  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        <DialogItem name='Dimych' id='1'/>
        <DialogItem name='Alena' id='2'/>
        <DialogItem name='Ivan' id='3'/>
        <DialogItem name='Vika' id='4'/>
      </div>
      <div className={css.messages}>
        <Message message='Hi'/>
        <Message message='How are you?'/>
      </div>
    </div>
  )
};
  
export default Dialogs;
