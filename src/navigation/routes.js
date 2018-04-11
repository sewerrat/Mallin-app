import HomeScreen from "mallin-app/src/containers/Screens/Home";
import LoginScreen from "mallin-app/src/containers/Screens/Login";
import FloorScreen from "mallin-app/src/containers/Screens/Floors";

import ShowMap from "mallin-app/src/containers/ShowMap";

export default [
    {
        name: "Home",
        title: "Home",
        screen: HomeScreen,
        showInMenu: true
    },
    {
        name: "Login",
        title: "Login",
        screen: LoginScreen,
        showInMenu: true
    },
    { 
        name: "ShowMap",
        title: "Home",
        screen: ShowMap,
        showInMenu: false
    },
    { 
        name: "Floors",
        title: "Floors",
        screen: FloorScreen,
        showInMenu: false
    }
]