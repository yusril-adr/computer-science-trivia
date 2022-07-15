import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signInWithCredential,
  signOut,
} from 'firebase/auth';
import { auth } from './config';

const Auth = {
  async signUp({ name, email, password }) {
    await createUserWithEmailAndPassword(auth, email, password);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: name,
    });

    return userCredential;
  },

  async signIn(email, password) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  },

  async signInToken(credentials) {
    const userCredential = await signInWithCredential(credentials);
    return userCredential;
  },

  async signOut() {
    await signOut(auth);
  },

  getCurrentUser() {
    return auth.currentUser;
  },
};

export default Auth;
