import React, { useEffect, useState } from "react";
import { RouteProps, Redirect, Route } from "react-router";

type ProtectedRouteProps = {} & RouteProps;

export function ProtectedRoute({ ...rest }: ProtectedRouteProps) {
  const token = localStorage.getItem("token");
  return token ? <Route {...rest} /> : <Redirect to="./login" />;
}
