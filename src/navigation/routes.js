import HomeScreen from "mallin-app/src/containers/Screens/Home";
import LoginScreen from "mallin-app/src/containers/Screens/Login";
import FloorScreen from "mallin-app/src/containers/Screens/Floors";
import TestScreen from "mallin-app/src/components/Screens/Test";

//import ShowMap from "mallin-app/src/containers/ShowMap";

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
        name: "Floors",
        title: "Floors",
        screen: FloorScreen,
        showInMenu: false
    },
    { 
        name: "Test",
        title: "Test",
        screen: TestScreen,
        showInMenu: true
    }
]