import { createContext } from "react";
import { User } from "../model/user.model";

interface UserContextProps {
  user: User | undefined;
  userName: string | undefined;
  dispatch?: ({ type }: { type: string }) => void;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  userName: null,
});
