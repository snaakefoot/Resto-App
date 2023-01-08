import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from '../screens/Login';
import Register from "../screens/register";

const screens ={
    Login: {
        screen: Login
    }  ,

    Register: {
        screen:Register
    } ,

}
const HomeStack= createStackNavigator(screens);
export default  createAppContainer(HomeStack);