import { createContext, useState } from 'react';

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    gender: '',
    age: '',
    weight: '',
    height: '',
    activity: '',
    bmi: null,
    bmr: null,
    tdee: null
  });

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
