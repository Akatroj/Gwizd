import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';

const {Screen, Navigator} = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Navigator initialRouteName="Main">
      <Screen name="Main" component={BottomTabNavigator} />
    </Navigator>
  );
}

export default RootNavigator;
