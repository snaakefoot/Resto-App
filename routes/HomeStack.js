import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from '../screens/Login';
import Register from "../screens/register";
import HomeStudent from "../screens/HomeStudent";
import HomeWorker from "../screens/HomeWorker";
import CreateState from "../screens/CreateState"
const screens ={
    Login: {
        screen: Login
    }  ,

    Register: {
        screen:Register
    } ,
    HomeStudent:{
        screen:HomeStudent
    },
    HomeWorker:{
        screen:HomeWorker
    },
    CreateState:{
        screen:CreateState
    }
}
const HomeStack= createStackNavigator(screens);
export default  createAppContainer(HomeStack);