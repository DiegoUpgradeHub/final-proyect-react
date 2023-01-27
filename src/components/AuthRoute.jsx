import React from "react";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ user, component }) => {
  if (!component) throw new Error('Necesitas añadir una prop "component" con el siguiente formato <MiComponente props />');

  if (user) return component;

  if (!user) return <Navigate to="/login" state={{ prevRoute: window.location.pathname }} />
}

export default AuthRoute;