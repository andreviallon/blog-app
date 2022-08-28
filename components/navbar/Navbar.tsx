import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";
import { Button, ButtonType } from "../button/Button";

export const Navbar = () => {
  const { user, userName } = useContext(UserContext);

  return (
    <div className="fixed w-full h-16 p-4 flex justify-between items-center bg-gray-100">
      <Link href="/">
        <button className="text-lg font-semibold">Blog App</button>
      </Link>
      <div className="flex gap-2">
        {userName ? (
          <>
            <Link href="/admin">
              <a>
                <Button buttonType={ButtonType.PRIMARY} text="Write Post" />
              </a>
            </Link>
            <Link href={`/${userName}`}>
              <a>
                <Button buttonType={ButtonType.SECONDARY} text="User" />
              </a>
            </Link>
          </>
        ) : (
          <Link href="/enter">
          <a>
            <Button buttonType={ButtonType.PRIMARY} text="Login" />
          </a>
        </Link>
        )}
      </div>
    </div>
  );
};
