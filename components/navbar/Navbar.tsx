import Link from "next/link";
import { Button, ButtonType } from "../button/Button";

export const Navbar = () => {
  return (
    <div className="w-full h-16 p-4 flex justify-between items-center bg-gray-100">
      <Link href="/">
        <button className="text-lg font-semibold">Blog App</button>
      </Link>
      <div>
        <Link href="/enter">
          <a>
            <Button buttonType={ButtonType.PRIMARY} text="Login" />
          </a>
        </Link>
      </div>
    </div>
  );
};
