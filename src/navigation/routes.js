import HomeScreen from "../components/Home";
import LoginScreen from "../components/Login";
import ShowMap from "../components/ShowMap";

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
    }
])