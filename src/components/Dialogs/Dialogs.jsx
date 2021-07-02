import React from "react";
import { Form, Field } from "react-final-form";
import { NavLink, Redirect } from "react-router-dom";
import { composeValidators, maxLength, required } from "../../utils/validators/validators";
import { Textarea } from "../сommon/FormControls/FormControls";
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

const maxLength50 = maxLength(50)

const AddMessageForm = (props) => {
  return (
    <Form onSubmit={values => {props.addNewMessage(values.dialogMessage)}}>
      {({ handleSubmit, pristine, form, submitting }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              placeholder="Enter The Matrix"
              name='dialogMessage' component={Textarea}
              validate={composeValidators(required,maxLength50)}
            />
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
    )}
    </Form>
  )
}

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = props.dialogsPage.messages.map(m => <MessageItem message={m.message} />);

  if (!props.isAuth) return <Redirect to={'/login'} />

  const addNewMessage = (message) => {
    props.sendMessage(message)
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
        <AddMessageForm addNewMessage={addNewMessage} />
      </div>
    </div>
  )
}
  
export default Dialogs;
