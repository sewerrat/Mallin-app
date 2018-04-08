import React, { Component } from "react";
import Login from 'mallin-app/src/containers/Login';
import ShowMap from 'mallin-app/src/containers/ShowMap';
import Home from 'mallin-app/src/containers/Home';
import FloorScreen from 'mallin-app/src/containers/Floors';
import SideBar from "./sidebar";
import { DrawerNavigator } from "react-navigation";
import routes from './routes';

const GenerateNavigationProps = () => {
  return routes.reduce(
    props,route => (
      props[route.name] = {
        screen: route.screen
      }
    )
  );
};

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: Home },
    Floor: {screen: FloorScreen},
    ShowMap: { screen: ShowMap },
    Login: { screen: Login }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;