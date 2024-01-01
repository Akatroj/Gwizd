import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

import auth from '@react-native-firebase/auth';

GoogleSignin.configure();

function LoginWithGoogle() {
  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <GoogleSigninButton
      // style={{paddingHorizontal: 10, backgroundColor: '#f0f'}}
      onPress={() =>
        onGoogleButtonPress()
          .then(() => console.log('Signed in with Google!'))
          .catch(error => {
            console.log(error);
          })
      }
    />
  );
}

export default LoginWithGoogle;
