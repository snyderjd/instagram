import { useState, useEffect, useContext } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import UserContext from '../context/user';

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      // we need a function that we can call (firebase service) that gets the user
      // data based on the id

      setActiveUser(response);
    }

    if (user?.uid) {
      getUserObjByUserId();
    }
  }, [user]);
}
