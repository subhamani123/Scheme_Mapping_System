// src/context/UserDataContext.js

import React, { createContext, useContext, useState } from "react";

// Create context
const UserDataContext = createContext();

// Provider component to wrap around the app
export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  // Function to update user data from any step/page
  const updateUserData = (newData) => {
    setUserData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  return (
    <UserDataContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

// Custom hook for easier access
export const useUserData = () => useContext(UserDataContext);
