import auth from '@react-native-firebase/auth';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setUser} from '../store/slices/auth';

export function useFirebaseAuth() {
  const dispatch = useDispatch();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      dispatch(setUser(user));
    });
    return subscriber; // unsubscribe on unmount
  }, [dispatch]);
}
