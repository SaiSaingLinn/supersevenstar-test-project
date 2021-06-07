import React, { Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import RouteConfig from "./route.config"
import Loading from "../components/Loading"

const RouteList = () => (
  <Switch>
    {RouteConfig.map(({ path, component }, key) =>
      <Route path={path} exact key={key} component={component} />
    )}
  </Switch>
);

export default function AppRoute() {
  return (
    <>
      <Suspense fallback={<Loading pageLoading={true} />}>
        <RouteList />
      </Suspense>
    </>
  );
}
