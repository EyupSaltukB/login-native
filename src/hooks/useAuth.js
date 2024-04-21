import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../config/firebase';

export default function useAuth() {
    const [user, setUser] = useState(null)

    useEffect(() => {
      const unsub = onAuthStateChanged(auth, user => {
        console.log("got user" , user );
        if (user) {
            setUser(user);
        }else{
            setUser(null);
        }
      });
      return unsub;
    }, [])
    
  return {user}
}