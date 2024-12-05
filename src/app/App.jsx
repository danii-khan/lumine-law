import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage/Landing";
import Contact from "../components/Contact/Contact";
import AllServices from "../components/ServicesPage/AllServices";
import Immigration from "../components/ServicesPage/Immigration/Immigration";
import PageTransition from "../lib/PageTransitions/PageTransition";
import SpouseVisa from "../components/ServicesPage/Immigration/SpouseVisa";
import BritishCitizenshipApplication from "../components/ServicesPage/Immigration/BritishCitizenshipApplication";
import VisitorVisa from "../components/ServicesPage/Immigration/VisitorVisa";
import SkilledWorkerVisa from "../components/ServicesPage/Immigration/SkilledWorkerVisa";
import CoS from "../components/ServicesPage/Immigration/CoS";
import StudentVisa from "../components/ServicesPage/Immigration/StudentVisa";
import EntryClearance from "../components/ServicesPage/Immigration/EntryClearance";
import SkilledMigrant from "../components/ServicesPage/Immigration/SkilledMigrant";
import VisaCategories from "../components/ServicesPage/Immigration/VisaCategories";
import VisaExtensions from "../components/ServicesPage/Immigration/VisaExtensions";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/lumine-law/"
            element={
              <PageTransition>
                <LandingPage />
              </PageTransition>
            }
          />
          <Route
            path="/lumine-law/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
          <Route
            path="/lumine-law/all-services"
            element={
              <PageTransition>
                <AllServices />
              </PageTransition>
            }
          />
          <Route
            path="/lumine-law/all-services/immigration"
            element={
              <PageTransition>
                <Immigration />
              </PageTransition>
            }
          />

          <Route
            path="/lumine-law/all-services/immigration/spouse-visa"
            element={
              <PageTransition>
                <SpouseVisa />
              </PageTransition>
            }
          />
          <Route
            path="/lumine-law/all-services/immigration/british-citizenship-application"
            element={
              <PageTransition>
                <BritishCitizenshipApplication />
              </PageTransition>
            }
          />
          <Route
            path="/lumine-law/all-services/immigration/uk-visitor-visa"
            element={
              <PageTransition>
                <VisitorVisa />
              </PageTransition>
            }
          />
          <Route
            path="/lumine-law/all-services/immigration/skilled-worker-visa"
            element={
              <PageTransition>
                <SkilledWorkerVisa />
              </PageTransition>
            }
          />
          <Route
            path="/lumine-law/all-services/immigration/certificate-of-sponsorship"
            element={
              <PageTransition>
                <CoS />
              </PageTransition>
            }
          />
          <Route
            path="/lumine-law/all-services/immigration/student-visa"
            element={
              <PageTransition>
                <StudentVisa />
              </PageTransition>
            }
          />
          <Route
            path="/lumine-law/all-services/immigration/entry-clearance"
            element={
              <PageTransition>
                <EntryClearance />
              </PageTransition>
            }
          />
          <Route
            path="/lumine-law/all-services/immigration/skilled-migrant"
            element={
              <PageTransition>
                <SkilledMigrant />
              </PageTransition>
            }
          />
          <Route
            path="/lumine-law/all-services/immigration/visa-categories"
            element={
              <PageTransition>
                <VisaCategories />
              </PageTransition>
            }
          />
          <Route
            path="/lumine-law/all-services/immigration/visa-extensions"
            element={
              <PageTransition>
                <VisaExtensions />
              </PageTransition>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
