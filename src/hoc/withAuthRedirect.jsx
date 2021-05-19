import { Redirect } from "react-router"
import React from "react"
import { connect } from "react-redux"

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {

    const RedirectComponent = (props) => {
        if (!props.isAuth) {
            return <Redirect to='/login' />
        }

        return <Component {...props} />
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}