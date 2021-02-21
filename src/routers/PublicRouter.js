import React from 'react'
import { Redirect, Route } from 'react-router-dom'


const PublicRouter = ({
  isLoggedIn,
  component : Component,
  ...rest
}) => {
  return (
    <Route {...rest} component={props => (
      (!isLoggedIn)?
        <Component {...props} />
      :
        <Redirect to="/department/" />
    )}/>
  )
}

export default PublicRouter;