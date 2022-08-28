import { Navbar } from "../components/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import { UserContext } from "../contexts/user-context";

function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider value={{ user: {}, userName: "andre" }}>
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
