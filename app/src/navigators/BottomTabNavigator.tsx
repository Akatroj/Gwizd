import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import MapScreen from '../screens/AnimalMap/MapScreen';

const {Navigator, Screen} = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Navigator initialRouteName="Map" screenOptions={{headerShown: false}}>
      <Screen name="AnimalMap" component={MapScreen} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}

export default BottomTabNavigator;
