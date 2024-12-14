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
import FreeholdSales from "../components/ServicesPage/Residential/FreeholdSales";
import FreeholdPurchases from "../components/ServicesPage/Residential/FreeholdPurchases";
import TransfersOfEquity from "../components/ServicesPage/Residential/TransfersOfEquity";
import LeaseTermsAdvice from "../components/ServicesPage/Residential/LeaseTermsAdvice";
import Commercial from "../components/ServicesPage/Commercial/Commercial";
import PurchaseCommercial from "../components/ServicesPage/Commercial/PurchaseCommercial";
import SaleCommercial from "../components/ServicesPage/Commercial/SaleCommercial";
import BusinessAndLicense from "../components/ServicesPage/Commercial/BusinessAndLicense";
import LeaseRenewals from "../components/ServicesPage/Commercial/LeaseRenewals";
import RentRecovery from "../components/ServicesPage/Commercial/RentRecovery";
import ForfeitureAndNotices from "../components/ServicesPage/Commercial/ForfeitureAndNotices";
import BreakRent from "../components/ServicesPage/Commercial/BreakRent";
import ConsentAlterations from "../components/ServicesPage/Commercial/ConsentAlterations";
import PropertyDilapidations from "../components/ServicesPage/Commercial/PropertyDilapidations";
import SchedulesConditions from "../components/ServicesPage/Commercial/SchedulesConditions";
import AdviceMultiple from "../components/ServicesPage/Commercial/AdviceMultiple";
import WillsAndProbate from "../components/ServicesPage/WillsAndProbate/WillsAndProbate";
import Wills from "../components/ServicesPage/WillsAndProbate/Wills";

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

          {/* Residential Property */}
          <Route
            path="/lumine-law/all-services/residential"
            element={
              <PageTransition>
                <Residential />
              </PageTransition>
            }
          />

          {/* Residential Subservice */}
          <Route
            path="/lumine-law/all-services/residential/freehold-sales"
            element={
              <PageTransition>
                <FreeholdSales />
              </PageTransition>
            }
          />

          {/* Residential Subservice */}
          <Route
            path="/lumine-law/all-services/residential/freehold-purchases"
            element={
              <PageTransition>
                <FreeholdPurchases />
              </PageTransition>
            }
          />

          {/* Residential Subservice */}
          <Route
            path="/lumine-law/all-services/residential/transfer-of-equity"
            element={
              <PageTransition>
                <TransfersOfEquity />
              </PageTransition>
            }
          />

          {/* Residential Subservice */}
          <Route
            path="/lumine-law/all-services/residential/lease-terms-advice"
            element={
              <PageTransition>
                <LeaseTermsAdvice />
              </PageTransition>
            }
          />

          {/* Commercial Property */}
          <Route
            path="/lumine-law/all-services/commercial"
            element={
              <PageTransition>
                <Commercial />
              </PageTransition>
            }
          />

          {/* Commercial Subservice */}
          <Route
            path="/lumine-law/all-services/residential/purchase-commercial"
            element={
              <PageTransition>
                <PurchaseCommercial />
              </PageTransition>
            }
          />

          {/* Commercial Subservice */}
          <Route
            path="/lumine-law/all-services/residential/sales-commercial"
            element={
              <PageTransition>
                <SaleCommercial />
              </PageTransition>
            }
          />

          {/* Commercial Subservice */}
          <Route
            path="/lumine-law/all-services/residential/business-licenses"
            element={
              <PageTransition>
                <BusinessAndLicense />
              </PageTransition>
            }
          />

          {/* Commercial Subservice */}
          <Route
            path="/lumine-law/all-services/residential/lease-renewals"
            element={
              <PageTransition>
                <LeaseRenewals />
              </PageTransition>
            }
          />

          {/* Commercial Subservice */}
          <Route
            path="/lumine-law/all-services/residential/rent-recovery"
            element={
              <PageTransition>
                <RentRecovery />
              </PageTransition>
            }
          />

          {/* Commercial Subservice */}
          <Route
            path="/lumine-law/all-services/residential/forfeiture-notices"
            element={
              <PageTransition>
                <ForfeitureAndNotices />
              </PageTransition>
            }
          />

          {/* Commercial Subservice */}
          <Route
            path="/lumine-law/all-services/residential/break-rent"
            element={
              <PageTransition>
                <BreakRent />
              </PageTransition>
            }
          />

          {/* Commercial Subservice */}
          <Route
            path="/lumine-law/all-services/residential/consent-alterations"
            element={
              <PageTransition>
                <ConsentAlterations />
              </PageTransition>
            }
          />

          {/* Commercial Subservice */}
          <Route
            path="/lumine-law/all-services/residential/property-dilapidations"
            element={
              <PageTransition>
                <PropertyDilapidations />
              </PageTransition>
            }
          />

          {/* Commercial Subservice */}
          <Route
            path="/lumine-law/all-services/residential/schedules-conditions"
            element={
              <PageTransition>
                <SchedulesConditions />
              </PageTransition>
            }
          />

          {/* Commercial Subservice */}
          <Route
            path="/lumine-law/all-services/residential/advice-multiple"
            element={
              <PageTransition>
                <AdviceMultiple />
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

          {/* Wills and Probate */}
          <Route
            path="/lumine-law/all-services/wills-probate"
            element={
              <PageTransition>
                <WillsAndProbate />
              </PageTransition>
            }
          />

          {/* Wills and Probate Subservice */}
          <Route
            path="/lumine-law/all-services/wills-probate/wills"
            element={
              <PageTransition>
                <Wills />
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
