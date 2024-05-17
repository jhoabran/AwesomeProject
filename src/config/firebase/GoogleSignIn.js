import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth';

export const _signInWithGoogle = async () => {
    try{
        GoogleSignin.configure({
            offlineAccess:false,
            webClientId:'943233991405-q1oad9sk582argobqvqcim6dfc2mkeub.apps.googleusercontent.com'
        })
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();

        const {idToken} = await GoogleSignin.signIn();
        const googleCredentials = auth.GoogleAuthProvider.credential(idToken)
        auth().signInWithCredential(googleCredentials)
        return userInfo;
    }catch(error){
        console.log('Google Sign In',error)
        return null
    }
}