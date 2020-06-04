import React, { useState, createContext } from "react";

type User = null | string;

export const AuthContext = createContext<any>(null);

interface AuthProviderProps { }

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userId, setUserId] = useState<User>(null);
  return (
    <AuthContext.Provider value={{userId, setUserId}}>
      {children}
    </AuthContext.Provider>
  );
};