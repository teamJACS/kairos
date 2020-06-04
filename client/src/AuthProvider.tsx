import React, { useState } from "react";
import { AsyncStorage } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { AUTH_USER } from "../src/queries"

type User = null | { username: string };

export const AuthContext = React.createContext<{
  user: User;
  login: () => void;
  logout: () => void;
}>({
  user: null,
  login: () => { },
  logout: () => { }
});

interface AuthProviderProps { }

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const { loading, error, data } = useQuery(AUTH_USER, {variables: {email, password}});
  if(!loading) setUser(data.auth.id);
  return (
    <AuthContext.Provider
      value={{
        user,
        login: (email, password) => {
            // setUser(fakeUser);
            // AsyncStorage.setItem("user", JSON.stringify(fakeUser));
        },
        logout: () => {
            setUser(null);
            AsyncStorage.removeItem("user");
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};