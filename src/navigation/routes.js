import HomeScreen from "mallin-app/src/containers/Home";
import LoginScreen from "mallin-app/src/containers/Login";
import ShowMap from "mallin-app/src/containers/ShowMap";
import FloorScreen from "mallin-app/src/containers/Floors";

export default [
    {
        name: "Home",
        screen: HomeScreen,
        showInMenu: true
    },
    {
        name: "Login",
        screen: LoginScreen,
        showInMenu: true
    },
    { 
        name: "ShowMap",
        screen: ShowMap,
        showInMenu: true
    },
    { 
        name: "Floors",
        screen: FloorScreen,
        showInMenu: false
    }
]