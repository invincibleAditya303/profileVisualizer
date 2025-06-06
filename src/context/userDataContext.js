import { createContext, useEffect, useState } from "react";

export const newUserContext = createContext([[], () => {}]);

export const UserContext = ({children}) => {
  const [userData, setUserData] = useState(() => {
    const data = localStorage.getItem('UserData');
    return data ? JSON.parse(data) : []
  });

  useEffect(()=> {
    localStorage.setItem('UserData', JSON.stringify(userData));
  }, [userData])

  return (
  <newUserContext.Provider value={[userData, setUserData]}>
    {children}
  </newUserContext.Provider>
  )
};