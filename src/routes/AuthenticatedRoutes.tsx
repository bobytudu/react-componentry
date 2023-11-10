import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { Loader } from "../common";

export interface RouteTypes {
  path: string;
  element: React.ReactNode;
  children?: RouteTypes[];
}

export interface RouterPropsTypes {
  routes: RouteTypes[];
  generalRoutes?: RouteTypes[];
}

export interface AuthenticatedRoutesPropsTypes {
  authenticated: boolean;
  privateRoutes?: RouteTypes[];
  publicRoutes?: RouteTypes[];
  generalRoutes?: RouteTypes[];
  loading?: boolean;
  loadingComponent?: React.ReactNode;
}

function PublicRouter({ routes, generalRoutes = [] }: RouterPropsTypes) {
  return useRoutes([...routes, ...generalRoutes]);
}

function PrivateRouter({ routes, generalRoutes = [] }: RouterPropsTypes) {
  return useRoutes([...routes, ...generalRoutes]);
}

export default function AuthenticatedRoutes(
  props: AuthenticatedRoutesPropsTypes
) {
  const {
    authenticated,
    privateRoutes = [],
    generalRoutes = [],
    loading,
    loadingComponent,
    publicRoutes = [],
  } = props;
  return (
    <BrowserRouter>
      {loading ? (
        loadingComponent || <Loader loading />
      ) : (
        <>
          {authenticated ? (
            <PrivateRouter
              routes={privateRoutes}
              generalRoutes={generalRoutes}
            />
          ) : (
            <PublicRouter routes={publicRoutes} generalRoutes={generalRoutes} />
          )}
        </>
      )}
    </BrowserRouter>
  );
}
