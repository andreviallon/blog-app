import { Navbar } from "../components/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import { UserContext } from "../contexts/user-context";
import { useUserData } from "../hooks/user-data";

function MyApp({ Component, pageProps }) {
  const userData = useUserData();
  const { user, userName } = userData;

  return (
    <UserContext.Provider value={{ user, userName }}>
      <div className="h-full">
        <Navbar />
        <div className="app-container">
          <Component {...pageProps} />
          <Toaster />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default MyApp;
