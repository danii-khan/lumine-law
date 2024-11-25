import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage/Landing";
import Contact from "../components/Contact/Contact";
import AllServices from "../components/ServicesPage/AllServices";
import Immigration from "../components/ServicesPage/Immigration/Immigration";
import PageTransition from "../lib/PageTransitions/PageTransition";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PageTransition>
                <LandingPage />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
          <Route
            path="/all-services"
            element={
              <PageTransition>
                <AllServices />
              </PageTransition>
            }
          />
          <Route
            path="/all-services/immigration"
            element={
              <PageTransition>
                <Immigration />
              </PageTransition>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
