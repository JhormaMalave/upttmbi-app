import React from 'react'
import { Redirect, Route } from 'react-router-dom'


const PrivateRouter = ({
  isLoggedIn,
  component : Component,
  ...rest
}) => {
  return (
    <Route {...rest} component={props => (
      (isLoggedIn)?
        <Component {...props} />
      :
        <Redirect to="/auth/login" />
    )}/>
  )
}

export default PrivateRouter;