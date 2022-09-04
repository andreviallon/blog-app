import { createContext } from "react";
import { User } from "firebase/auth";

interface UserContextProps {
  user: User | undefined;
  username: string | undefined;
  dispatch?: ({ type }: { type: string }) => void;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  username: null,
});
