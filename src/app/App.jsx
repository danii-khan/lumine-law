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
import IndefiniteLeave from "../components/ServicesPage/Immigration/IndefiniteLeave";
import HumanRights from "../components/ServicesPage/Immigration/HumanRights";
import DiscretionaryLeave from "../components/ServicesPage/Immigration/DiscretionaryLeave";
import BailRevocation from "../components/ServicesPage/Immigration/BailRevocation";
import EuSettlement from "../components/ServicesPage/Immigration/EuSettlement";
import ReviewsAppeals from "../components/ServicesPage/Immigration/ReviewsAppeals";
import Asylum from "../components/ServicesPage/Immigration/Asylum";
import InnovatorFounder from "../components/ServicesPage/Immigration/InnovatorFounder";
import CreativeWorker from "../components/ServicesPage/Immigration/CreativeWorker";
import Family from "../components/ServicesPage/Family/Family";
import Divorce from "../components/ServicesPage/Family/Divorce";
import NuptialAgreement from "../components/ServicesPage/Family/NuptialAgreement";
import ChildArrangements from "../components/ServicesPage/Family/ChildArrangements";
import ParentalResponsiblity from "../components/ServicesPage/Family/ParentalResponsibility";
import ConsentOrders from "../components/ServicesPage/Family/ConsentOrders";
import FinancialStatements from "../components/ServicesPage/Family/FinancialSettlements";
import DomesticViolence from "../components/ServicesPage/Family/DomesticViolence";
import Adoption from "../components/ServicesPage/Family/Adoption";
import Residential from "../components/ServicesPage/Residential/Residential";
import DisputeResolution from "../components/ServicesPage/Dispute/DisputeResolution";
import Landlord from "../components/ServicesPage/Landlord/Landlord";
import PropertyPrices from "../components/Prices/PropertyPrices";
import DebtRecovery from "../components/Prices/DebtRecovery";
import ImmigrationPrices from "../components/Prices/ImmigrationPrices";
import About from "../components/About/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Landing */}
          <Route
            path="/lumine-law/"
            element={
              <PageTransition>
                <LandingPage />
              </PageTransition>
            }
          />

          {/* Contact */}
          <Route
            path="/lumine-law/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />

          {/* All Services */}
          <Route
            path="/lumine-law/all-services"
            element={
              <PageTransition>
                <AllServices />
              </PageTransition>
            }
          />

          {/* Immigration */}
          <Route
            path="/lumine-law/all-services/immigration"
            element={
              <PageTransition>
                <Immigration />
              </PageTransition>
            }
          />

          {/* Immigration Sub Service */}
          <Route
            path="/lumine-law/all-services/immigration/spouse-visa"
            element={
              <PageTransition>
                <SpouseVisa />
              </PageTransition>
            }
          />

          {/* Immigration Sub Service */}
          <Route
            path="/lumine-law/all-services/immigration/british-citizenship-application"
            element={
              <PageTransition>
                <BritishCitizenshipApplication />
              </PageTransition>
            }
          />

          {/* Immigration Sub Service */}
          <Route
            path="/lumine-law/all-services/immigration/uk-visitor-visa"
            element={
              <PageTransition>
                <VisitorVisa />
              </PageTransition>
            }
          />

          {/* Immigration Sub Service */}
          <Route
            path="/lumine-law/all-services/immigration/skilled-worker-visa"
            element={
              <PageTransition>
                <SkilledWorkerVisa />
              </PageTransition>
            }
          />

          {/* Immigration Sub Service */}
          <Route
            path="/lumine-law/all-services/immigration/certificate-of-sponsorship"
            element={
              <PageTransition>
                <CoS />
              </PageTransition>
            }
          />

          {/* Immigration Sub Service */}
          <Route
            path="/lumine-law/all-services/immigration/student-visa"
            element={
              <PageTransition>
                <StudentVisa />
              </PageTransition>
            }
          />

          {/* Immigration Sub Service */}
          <Route
            path="/lumine-law/all-services/immigration/entry-clearance"
            element={
              <PageTransition>
                <EntryClearance />
              </PageTransition>
            }
          />

          {/* Immigration Sub Service */}
          <Route
            path="/lumine-law/all-services/immigration/skilled-migrant"
            element={
              <PageTransition>
                <SkilledMigrant />
              </PageTransition>
            }
          />

          {/* Immigration Sub Service */}
          <Route
            path="/lumine-law/all-services/immigration/visa-categories"
            element={
              <PageTransition>
                <VisaCategories />
              </PageTransition>
            }
          />

          {/* Immigration Sub Service */}
          <Route
            path="/lumine-law/all-services/immigration/visa-extensions"
            element={
              <PageTransition>
                <VisaExtensions />
              </PageTransition>
            }
          />

          {/* Immigration Sub Service */}
          <Route
            path="/lumine-law/all-services/immigration/indefinite-leave"
            element={
              <PageTransition>
                <IndefiniteLeave />
              </PageTransition>
            }
          />

          {/* Immigration Sub Service */}
          <Route
            path="/lumine-law/all-services/immigration/human-rights-app"
            element={
              <PageTransition>
                <HumanRights />
              </PageTransition>
            }
          />

          {/* Immigration Sub Service */}
          <Route
            path="/lumine-law/all-services/immigration/discretionary-leave"
            element={
              <PageTransition>
                <DiscretionaryLeave />
              </PageTransition>
            }
          />

          {/* Immigration Sub Service */}
          <Route
            path="/lumine-law/all-services/immigration/bail-revocation"
            element={
              <PageTransition>
                <BailRevocation />
              </PageTransition>
            }
          />

          {/* Immigration Sub Service */}
          <Route
            path="/lumine-law/all-services/immigration/eu-settlement"
            element={
              <PageTransition>
                <EuSettlement />
              </PageTransition>
            }
          />

          {/* Immigration Sub Service */}
          <Route
            path="/lumine-law/all-services/immigration/reviews-appeals"
            element={
              <PageTransition>
                <ReviewsAppeals />
              </PageTransition>
            }
          />

          {/* Immigration Sub Service */}
          <Route
            path="/lumine-law/all-services/immigration/asylum"
            element={
              <PageTransition>
                <Asylum />
              </PageTransition>
            }
          />

          {/* Immigration Sub Service */}
          <Route
            path="/lumine-law/all-services/immigration/innovator-founder"
            element={
              <PageTransition>
                <InnovatorFounder />
              </PageTransition>
            }
          />

          {/* Immigration Sub Service */}
          <Route
            path="/lumine-law/all-services/immigration/creative-worker"
            element={
              <PageTransition>
                <CreativeWorker />
              </PageTransition>
            }
          />

          {/* Family */}
          <Route
            path="/lumine-law/all-services/family-and-children"
            element={
              <PageTransition>
                <Family />
              </PageTransition>
            }
          />

          {/* Family Sub Service */}
          <Route
            path="/lumine-law/all-services/family/divorce"
            element={
              <PageTransition>
                <Divorce />
              </PageTransition>
            }
          />

          {/* Family Sub Service */}
          <Route
            path="/lumine-law/all-services/family/nuptial-agreement"
            element={
              <PageTransition>
                <NuptialAgreement />
              </PageTransition>
            }
          />

          {/* Family Sub Service */}
          <Route
            path="/lumine-law/all-services/family/child-arrangements"
            element={
              <PageTransition>
                <ChildArrangements />
              </PageTransition>
            }
          />

          {/* Family Sub Service */}
          <Route
            path="/lumine-law/all-services/family/parental-responsbility"
            element={
              <PageTransition>
                <ParentalResponsiblity />
              </PageTransition>
            }
          />

          {/* Family Sub Service */}
          <Route
            path="/lumine-law/all-services/family/consent-orders"
            element={
              <PageTransition>
                <ConsentOrders />
              </PageTransition>
            }
          />

          {/* Family Sub Service */}
          <Route
            path="/lumine-law/all-services/family/financial-settlements"
            element={
              <PageTransition>
                <FinancialStatements />
              </PageTransition>
            }
          />

          {/* Family Sub Service */}
          <Route
            path="/lumine-law/all-services/family/domestic-violence"
            element={
              <PageTransition>
                <DomesticViolence />
              </PageTransition>
            }
          />

          {/* Family Sub Service */}
          <Route
            path="/lumine-law/all-services/family/adoption-surrogacy"
            element={
              <PageTransition>
                <Adoption />
              </PageTransition>
            }
          />

          {/* Residential & Commercial Property */}
          <Route
            path="/lumine-law/all-services/residential"
            element={
              <PageTransition>
                <Residential />
              </PageTransition>
            }
          />

          {/* Dispute Resolution */}
          <Route
            path="/lumine-law/all-services/dispute-resolution"
            element={
              <PageTransition>
                <DisputeResolution />
              </PageTransition>
            }
          />

          {/* Landlord & Tenant Dispute */}
          <Route
            path="/lumine-law/all-services/landlord-tenant"
            element={
              <PageTransition>
                <Landlord />
              </PageTransition>
            }
          />

          {/* Property Prices */}
          <Route
            path="/lumine-law/prices/property-prices"
            element={
              <PageTransition>
                <PropertyPrices />
              </PageTransition>
            }
          />

          {/* Debt Recovery Prices */}
          <Route
            path="/lumine-law/prices/debt-recovery"
            element={
              <PageTransition>
                <DebtRecovery />
              </PageTransition>
            }
          />

          {/* Immigration Prices */}
          <Route
            path="/lumine-law/prices/immigration-prices"
            element={
              <PageTransition>
                <ImmigrationPrices />
              </PageTransition>
            }
          />

          {/* About */}
          <Route
            path="/lumine-law/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
