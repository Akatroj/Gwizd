import {Text, TouchableOpacity, View} from 'react-native';
import Config from 'react-native-config';
import auth from '@react-native-firebase/auth';
import LoginWithGoogle from '../components/LoginWithGoogle';
import {useSelector} from 'react-redux';
import type {RootState} from '../store';

function Home() {
  const user = useSelector((state: RootState) => state.auth.user);

  console.log(Config.API_URL);

  return (
    <View>
      <View style={{justifyContent: 'center'}}>
        {user ? JSON.stringify(user) : <LoginWithGoogle />}
      </View>
    </View>
  );
}

export default Home;
