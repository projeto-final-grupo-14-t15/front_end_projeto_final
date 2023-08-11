import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import HeaderProvider from "./context/HeaderContext/HeaderContext.tsx";
import FilterProvider from "./context/FilterContext/index.tsx";
import { AnnouncementsProvider } from "./context/AnnouncementsContext/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <BrowserRouter>
         <FilterProvider>
            <HeaderProvider>
              <AnnouncementsProvider>
                  <App />
              </AnnouncementsProvider>
            </HeaderProvider>
         </FilterProvider>
      </BrowserRouter>
   </React.StrictMode>
