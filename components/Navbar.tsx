// import Link from "next/link";
// import Image from "next/image";
// import { Button, ButtonType } from "../button/Button";

// export const Navbar = () => {
//   const user = null;
//   const username = null;

//   return (
//     <div className="w-full h-16 p-4 flex justify-between items-center bg-gray-100">
//       <Link href="/">
//         <button className="text-lg font-semibold">Blog App</button>
//       </Link>
//       <div>
//         {username ? (
//           <>
//             <Link href="/admin">
//               <a>
//                 <Button buttonType={ButtonType.PRIMARY} text="Write Post" />
//               </a>
//             </Link>
//             <Link href={`/${username}`}>
//               <Image src={user?.photoURL} alt="user picture"></Image>
//             </Link>
//           </>
//         ) : (
//           <Link href="/enter">
//             <a>
//               <Button buttonType={ButtonType.PRIMARY} text="Login" />
//             </a>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../contexts/user-context";
import { Button, ButtonType } from "./Button";

export const Navbar = () => {
  const { user, username } = useContext(UserContext);

  return (
    <div className="fixed w-full h-16 p-4 flex justify-between items-center bg-gray-100">
      <Link href="/">
        <button className="text-lg font-semibold">Blog App</button>
      </Link>
      <div className="flex gap-2">
        {username ? (
          <>
            <Link href="/admin">
              <a>
                <Button buttonType={ButtonType.PRIMARY} text="Write Post" />
              </a>
            </Link>
            <Link href={`/${username}`}>
              <a>
                <Button buttonType={ButtonType.SECONDARY} text="User" />
              </a>
            </Link>
          </>
        ) : (
          <Link href="/login">
            <a>
              <Button buttonType={ButtonType.PRIMARY} text="Login" />
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};
