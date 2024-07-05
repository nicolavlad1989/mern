import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
// import OAuth from '../components/OAuth';

export default function OAuth() {
    const dispatch = useDispatch();
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider); // sign in with popup
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                })
            });

            const data = await res.json();
            dispatch(signInSuccess(data));
            
        } catch (error) {
            console.log("could not log in with google", error)
        }
    }
  return (
    // <button className='w-full bg-red-700 text-white font-bold py-2 px-4 rounded uppercase hover:opacity-95'>Sign in with Google</button>
    <button type = "button" onClick={handleGoogleClick} className='w-full bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-80'>Sign in with Google</button>
  )
}
