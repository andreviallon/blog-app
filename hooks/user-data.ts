import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Collection } from "../util/collections";
import { firestore, getFireAuth } from "../util/firebase";

export const useUserData = () => {
  const [user] = useAuthState(getFireAuth);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    let unsubscribe: any;

    if (user) {
      const ref = firestore.collection(Collection.USERS).doc(user.uid);
      unsubscribe = ref.onSnapshot((doc) => {
        setUserName(doc.data()?.userName);
      });
    } else {
      setUserName(null);
    }

    return unsubscribe;
  }, [user]);

  return { user, userName };
};
