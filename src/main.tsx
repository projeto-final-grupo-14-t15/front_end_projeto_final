
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import HeaderProvider from "./context/HeaderContext/HeaderContext.tsx";
import { AnnouncementsProvider } from "./context/AnnouncementsContext/index.tsx";
import { KenzieKarsProvider } from "./context/KenzieKarsContext/index.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
   // <React.StrictMode>
   <BrowserRouter>
      <HeaderProvider>
         <AnnouncementsProvider>
            <KenzieKarsProvider>
                  <App />
            </KenzieKarsProvider>
         </AnnouncementsProvider>
      </HeaderProvider>
   </BrowserRouter>
   // </React.StrictMode>
);
