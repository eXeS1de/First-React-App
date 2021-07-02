import React from "react"
import { Form, Field } from "react-final-form"
import { required } from "../../utils/validators/validators"
import { Input } from "../сommon/FormControls/FormControls"

const LoginForm = (props) => {
  return (
    <Form onSubmit={values => {console.log(values)}}>
      {({ handleSubmit, pristine, form, submitting }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field placeholder="Login" name='Login' component={Input} validate={required} />
          </div>
          <div>
            <Field placeholder="Password" name='Password' component={Input} validate={required} />
          </div>
          <div>
            <Field type="checkbox" name='Remember me' component={Input} /> Remember me
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      )}
    </Form>
  )
}

const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
        </div>
    )
}

export default Login
