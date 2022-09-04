import { useContext, useState } from "react";
import { UserContext } from "../contexts/user-context";
import { Button, ButtonType } from "./button/Button";

export const UserNameForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { user, username } = useContext(UserContext);

  const handleOnSubmit = () => {};
  const handleInputChange = () => {};

  return (
    <>
      {!username && (
        <div className="flex flex-col gap-3 w-full">
          <h2 className="text-xl font-medium">Pick a username</h2>
          <form onSubmit={handleOnSubmit} className="flex gap-3 w-full">
            <input
              className="border-2 border-gray-300 border-solid p-2 rounded w-full"
              name="username"
              placeholder="username"
              value={inputValue}
              onChange={handleInputChange}
            />
            <Button
              text="Select"
              buttonType={ButtonType.PRIMARY}
              disabled={!inputValue}
            ></Button>
          </form>

        </div>
      )}
    </>
  );
};
