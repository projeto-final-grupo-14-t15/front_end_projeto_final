import { ToastContainer } from "react-toastify";
import GlobalStyles from "./styles/GlobalStyles";
import { RoutesMain } from "./routes";
import { Header } from "./components/Header";
import { LoginProvider } from "./context/LoginContext";
import { Footer } from "./components/Footer";
import { RegisterProvider } from "./context/RegisterContext";
import { UserProvider } from "./context/UserContext";

function App() {
   return (
      <>
         <GlobalStyles />
         <RegisterProvider>
            <LoginProvider>
            <UserProvider>
               <Header />
               <RoutesMain />
            </UserProvider>
            </LoginProvider>
         </RegisterProvider>
         <ToastContainer />
         <Footer />
      </>
   );
}

export default App;
