import HomeScreen from "../components/Home";
import LoginScreen from "../components/Login";
import ShowMap from "../components/ShowMap";
import FloorScreen from "mallin-app/src/components/Floors";

export default ([
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
])