import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

const {Navigator, Screen} = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}

export default BottomTabNavigator;
