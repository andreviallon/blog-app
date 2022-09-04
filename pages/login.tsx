import { auth, googleAuthProvider } from "../util/firebase";
import { Button, ButtonType } from "../components/button/Button";
import { UserContext } from "../contexts/user-context";
import { useContext } from "react";

const Login = () => {
  const { user, username } = useContext(UserContext);

  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (e) {
      console.error(e);
    }
  };

  const logout = () => {
    auth.signOut();
  };

  const loginButtons = () => (
    <div className="flex flex-col items-center justify-center gap-2">
      <Button
        buttonType={ButtonType.SECONDARY}
        text="Sign in with Google"
        onClick={signInWithGoogle}
      ></Button>
      <Button
        buttonType={ButtonType.PRIMARY}
        text="Sign in anonymously"
      ></Button>
    </div>
  );

  const logoutButton = () => (
    <Button
      buttonType={ButtonType.DANGER}
      text="Logout"
      onClick={logout}
    ></Button>
  );

  return (
    <div className="flex justify-center mx-auto mt-8">
      {user ? logoutButton() : loginButtons()}
    </div>
  );
};

export default login;
