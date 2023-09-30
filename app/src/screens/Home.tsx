import {Text, View} from 'react-native';
import Config from 'react-native-config';

function Home() {
  console.log(Config.API_URL);

  return (
    <View>
      <Text>Siema</Text>
    </View>
  );
}

export default Home;
