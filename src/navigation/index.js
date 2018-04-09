import React, { Component } from "react";
import Login from 'mallin-app/src/containers/Login';
import ShowMap from 'mallin-app/src/containers/ShowMap';
import Home from 'mallin-app/src/containers/Home';
import FloorScreen from 'mallin-app/src/containers/Floors';
import SideBar from "./sidebar";
import { DrawerNavigator } from "react-navigation";
import routes from './routes';

const GenerateNavigationProps = () => {
  var navs = {};
  routes.forEach(route => {
    navs[route.name] = {
      screen: route.screen
    };
  });
  return navs;
};

const MainRouter = DrawerNavigator(
  GenerateNavigationProps(),
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default MainRouter;