import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { interpolatePath } from './router/linkHelpers'
import type {
  RouteDefinitionsToRoutes,
  OptionalRouteOptions,
  ParamValue,
} from './router/types'
import { Layout } from './ext-src/Layout.jsx'

import createAuthRequiredPage from "./auth/pages/createAuthRequiredPage"

import LoginPage from './ext-src/pages/auth/Login.jsx'
import SignupPage from './ext-src/pages/auth/Signup.jsx'
import { HomePage } from './ext-src/pages/Home.jsx'
import { DataEntry as DataEntryPage } from './ext-src/pages/DataEntry.jsx'
import { MealPlanning as MealPlanningPage } from './ext-src/pages/MealPlanning.jsx'
import { MealAdjustment as MealAdjustmentPage } from './ext-src/pages/MealAdjustment.jsx'


export const routes = {
  LoginRoute: {
    to: "/login",
    component: LoginPage,
    build: (
      options?: OptionalRouteOptions,
    ) => interpolatePath("/login", undefined, options.search, options.hash),
  },
  SignupRoute: {
    to: "/signup",
    component: SignupPage,
    build: (
      options?: OptionalRouteOptions,
    ) => interpolatePath("/signup", undefined, options.search, options.hash),
  },
  HomePageRoute: {
    to: "/",
    component: HomePage,
    build: (
      options?: OptionalRouteOptions,
    ) => interpolatePath("/", undefined, options.search, options.hash),
  },
  DataEntryRoute: {
    to: "/data-entry",
    component: DataEntryPage,
    build: (
      options?: OptionalRouteOptions,
    ) => interpolatePath("/data-entry", undefined, options.search, options.hash),
  },
  MealPlanningRoute: {
    to: "/meal-planning",
    component: MealPlanningPage,
    build: (
      options?: OptionalRouteOptions,
    ) => interpolatePath("/meal-planning", undefined, options.search, options.hash),
  },
  MealAdjustmentRoute: {
    to: "/meal-adjustment",
    component: MealAdjustmentPage,
    build: (
      options?: OptionalRouteOptions,
    ) => interpolatePath("/meal-adjustment", undefined, options.search, options.hash),
  },
} as const;

export type Routes = RouteDefinitionsToRoutes<typeof routes>

const router = (
  <Router basename="/">
    <Layout>
    <Switch>
      {Object.entries(routes).map(([routeKey, route]) => (
        <Route
          exact
          key={routeKey}
          path={route.to}
          component={route.component}
        />
      ))}
    </Switch>
    </Layout>
  </Router>
)

export default router

export { Link } from './router/Link'
