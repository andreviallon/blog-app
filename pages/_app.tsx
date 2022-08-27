import { Navbar } from "../components/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-full">
      <Navbar />
      <div className="app-container">
        <Component {...pageProps} />
        <Toaster />
      </div>
    </div>
  );
}

export default MyApp;
