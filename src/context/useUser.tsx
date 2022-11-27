import React, { useContext } from "react";
import { User } from "../types";

export const UserContext = React.createContext<User>({} as User)

export default function useUser() {
  return useContext(UserContext);
}