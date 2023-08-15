import { ToastContainer } from "react-toastify";
import GlobalStyles from "./styles/GlobalStyles";
import { RoutesMain } from "./routes";
import { Header } from "./components/Header";
import { LoginProvider } from "./context/LoginContext";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />

      <LoginProvider>

      <Header />

      <RoutesMain />

      </LoginProvider>

      <ToastContainer />

      <Footer />
      
    </>
  );
}

export default App;
