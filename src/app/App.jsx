import "../styles/App.css";
import React, { Suspense, Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
const LandingPage = React.lazy(() =>
  import("../components/LandingPage/Landing")
);
const Contact = React.lazy(() => import("../components/Contact/Contact"));
const AllServices = React.lazy(() =>
  import("../components/ServicesPage/AllServices")
);
const Immigration = React.lazy(() =>
  import("../components/ServicesPage/Immigration/Immigration")
);
const PageTransition = React.lazy(() =>
  import("../lib/PageTransitions/PageTransition")
);
const SpouseVisa = React.lazy(() =>
  import("../components/ServicesPage/Immigration/SpouseVisa")
);
const BritishCitizenshipApplication = React.lazy(() =>
  import("../components/ServicesPage/Immigration/BritishCitizenshipApplication")
);
const VisitorVisa = React.lazy(() =>
  import("../components/ServicesPage/Immigration/VisitorVisa")
);
const SkilledWorkerVisa = React.lazy(() =>
  import("../components/ServicesPage/Immigration/SkilledWorkerVisa")
);
const CoS = React.lazy(() =>
  import("../components/ServicesPage/Immigration/CoS")
);
const StudentVisa = React.lazy(() =>
  import("../components/ServicesPage/Immigration/StudentVisa")
);
const EntryClearance = React.lazy(() =>
  import("../components/ServicesPage/Immigration/EntryClearance")
);
const SkilledMigrant = React.lazy(() =>
  import("../components/ServicesPage/Immigration/SkilledMigrant")
);
const VisaCategories = React.lazy(() =>
  import("../components/ServicesPage/Immigration/VisaCategories")
);
const VisaExtensions = React.lazy(() =>
  import("../components/ServicesPage/Immigration/VisaExtensions")
);
const IndefiniteLeave = React.lazy(() =>
  import("../components/ServicesPage/Immigration/IndefiniteLeave")
);
const HumanRights = React.lazy(() =>
  import("../components/ServicesPage/Immigration/HumanRights")
);
const DiscretionaryLeave = React.lazy(() =>
  import("../components/ServicesPage/Immigration/DiscretionaryLeave")
);
const BailRevocation = React.lazy(() =>
  import("../components/ServicesPage/Immigration/BailRevocation")
);
const EuSettlement = React.lazy(() =>
  import("../components/ServicesPage/Immigration/EuSettlement")
);
const ReviewsAppeals = React.lazy(() =>
  import("../components/ServicesPage/Immigration/ReviewsAppeals")
);
const Asylum = React.lazy(() =>
  import("../components/ServicesPage/Immigration/Asylum")
);
const InnovatorFounder = React.lazy(() =>
  import("../components/ServicesPage/Immigration/InnovatorFounder")
);
const CreativeWorker = React.lazy(() =>
  import("../components/ServicesPage/Immigration/CreativeWorker")
);
const Family = React.lazy(() =>
  import("../components/ServicesPage/Family/Family")
);
const Divorce = React.lazy(() =>
  import("../components/ServicesPage/Family/Divorce")
);
const NuptialAgreement = React.lazy(() =>
  import("../components/ServicesPage/Family/NuptialAgreement")
);
const ChildArrangements = React.lazy(() =>
  import("../components/ServicesPage/Family/ChildArrangements")
);
const ParentalResponsiblity = React.lazy(() =>
  import("../components/ServicesPage/Family/ParentalResponsibility")
);
const ConsentOrders = React.lazy(() =>
  import("../components/ServicesPage/Family/ConsentOrders")
);
const FinancialStatements = React.lazy(() =>
  import("../components/ServicesPage/Family/FinancialSettlements")
);
const DomesticViolence = React.lazy(() =>
  import("../components/ServicesPage/Family/DomesticViolence")
);
const Adoption = React.lazy(() =>
  import("../components/ServicesPage/Family/Adoption")
);
const Residential = React.lazy(() =>
  import("../components/ServicesPage/Residential/Residential")
);
const DisputeResolution = React.lazy(() =>
  import("../components/ServicesPage/Dispute/DisputeResolution")
);
const Landlord = React.lazy(() =>
  import("../components/ServicesPage/Landlord/Landlord")
);
const PropertyPrices = React.lazy(() =>
  import("../components/Prices/PropertyPrices")
);
const DebtRecovery = React.lazy(() =>
  import("../components/Prices/DebtRecovery")
);
const ImmigrationPrices = React.lazy(() =>
  import("../components/Prices/ImmigrationPrices")
);
const About = React.lazy(() => import("../components/About/About"));
const FreeholdSales = React.lazy(() =>
  import("../components/ServicesPage/Residential/FreeholdSales")
);
const FreeholdPurchases = React.lazy(() =>
  import("../components/ServicesPage/Residential/FreeholdPurchases")
);
const TransfersOfEquity = React.lazy(() =>
  import("../components/ServicesPage/Residential/TransfersOfEquity")
);
const LeaseTermsAdvice = React.lazy(() =>
  import("../components/ServicesPage/Residential/LeaseTermsAdvice")
);
const Commercial = React.lazy(() =>
  import("../components/ServicesPage/Commercial/Commercial")
);
const PurchaseCommercial = React.lazy(() =>
  import("../components/ServicesPage/Commercial/PurchaseCommercial")
);
const SaleCommercial = React.lazy(() =>
  import("../components/ServicesPage/Commercial/SaleCommercial")
);
const BusinessAndLicense = React.lazy(() =>
  import("../components/ServicesPage/Commercial/BusinessAndLicense")
);
const LeaseRenewals = React.lazy(() =>
  import("../components/ServicesPage/Commercial/LeaseRenewals")
);
const RentRecovery = React.lazy(() =>
  import("../components/ServicesPage/Commercial/RentRecovery")
);
const ForfeitureAndNotices = React.lazy(() =>
  import("../components/ServicesPage/Commercial/ForfeitureAndNotices")
);
const BreakRent = React.lazy(() =>
  import("../components/ServicesPage/Commercial/BreakRent")
);
const ConsentAlterations = React.lazy(() =>
  import("../components/ServicesPage/Commercial/ConsentAlterations")
);
const PropertyDilapidations = React.lazy(() =>
  import("../components/ServicesPage/Commercial/PropertyDilapidations")
);
const SchedulesConditions = React.lazy(() =>
  import("../components/ServicesPage/Commercial/SchedulesConditions")
);
const AdviceMultiple = React.lazy(() =>
  import("../components/ServicesPage/Commercial/AdviceMultiple")
);
const WillsAndProbate = React.lazy(() =>
  import("../components/ServicesPage/WillsAndProbate/WillsAndProbate")
);
const Wills = React.lazy(() =>
  import("../components/ServicesPage/WillsAndProbate/Wills")
);
const Trusts = React.lazy(() =>
  import("../components/ServicesPage/WillsAndProbate/Trusts")
);
const PowerOfAttorney = React.lazy(() =>
  import("../components/ServicesPage/WillsAndProbate/PowerOfAttorney")
);
const EstatePlanning = React.lazy(() =>
  import("../components/ServicesPage/WillsAndProbate/EstatePlanning")
);
const InheritanceTaxPlanning = React.lazy(() =>
  import("../components/ServicesPage/WillsAndProbate/InheritanceTaxPlanning")
);
const WealthManagement = React.lazy(() =>
  import("../components/ServicesPage/WillsAndProbate/WealthManagement")
);
const SuccessionPlanning = React.lazy(() =>
  import("../components/ServicesPage/WillsAndProbate/SuccessionPlanning")
);
const IntellectualProperty = React.lazy(() =>
  import("../components/ServicesPage/IntellectualProperty/IntellectualProperty")
);
const DebtMatters = React.lazy(() =>
  import("../components/ServicesPage/Dispute/DebtMatters")
);
const ContractDisputes = React.lazy(() =>
  import("../components/ServicesPage/Dispute/ContractDisputes")
);
const CorporatePersonalBankruptcy = React.lazy(() =>
  import("../components/ServicesPage/Dispute/CorporatePersonalBankruptcty")
);
const BuildingContractDisputes = React.lazy(() =>
  import("../components/ServicesPage/Dispute/BuildingContractDisputes")
);
const SupplyGoodsServices = React.lazy(() =>
  import("../components/ServicesPage/Dispute/SupplyGoodsServices")
);
const BuildingContracts = React.lazy(() =>
  import("../components/ServicesPage/Dispute/BuildingContracts")
);
const DisputeDebtRecovery = React.lazy(() =>
  import("../components/ServicesPage/Dispute/DisputeDebtRecovery")
);
const News = React.lazy(() => import("../components/News/News"));
const Insights = React.lazy(() => import("../components/Insights/Insights"));
const Article = React.lazy(() => import("../components/Article/Article"));
const Probate = React.lazy(() =>
  import("../components/ServicesPage/WillsAndProbate/Probate")
);
const PossessionClaims = React.lazy(() =>
  import("../components/ServicesPage/Landlord/PossessionClaims")
);
const RecoveryRent = React.lazy(() =>
  import("../components/ServicesPage/Landlord/RecoveryRent")
);
const ClaimsDisrepair = React.lazy(() =>
  import("../components/ServicesPage/Landlord/ClaimsDisrepair")
);
const Trademark = React.lazy(() =>
  import("../components/ServicesPage/IntellectualProperty/Trademark")
);
const Copyright = React.lazy(() =>
  import("../components/ServicesPage/IntellectualProperty/Copyright")
);
const Patent = React.lazy(() =>
  import("../components/ServicesPage/IntellectualProperty/Patent")
);
import ResourceLoader from "../utils/ResourceLoader";
import { Box, Spinner, Center, VStack, Text, Image } from "@chakra-ui/react";
import Logo from "../assets/navbar/logo.webp";
import FontPreloader from "../utils/FontPreLoader";
import ResourceHints from "../utils/ResourceHints";

const LoadingSpinner = () => (
  <Center minH="100vh" bg="black">
    <VStack spacing={8}>
      <Box w="200px" h="200px" mb={4}>
        <Image
          src={Logo}
          alt="Lumine Law Logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <VStack spacing={4}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#beab7c"
          size="xl"
        />
        <Text color="#beab7c" fontSize="lg">
          Loading...
        </Text>
      </VStack>
    </VStack>
  </Center>
);

const SuspensePageTransition = ({ children }) => (
  <Suspense fallback={<LoadingSpinner />}>
    <PageTransition>{children}</PageTransition>
  </Suspense>
);

function App() {
  return (
    <>
      <ResourceLoader />
      <ResourceHints />
      <FontPreloader />
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Landing */}
            <Route
              path="/lumine-law/"
              element={
                <SuspensePageTransition>
                  <LandingPage />
                </SuspensePageTransition>
              }
            />

            {/* Contact */}
            <Route
              path="/lumine-law/contact"
              element={
                <SuspensePageTransition>
                  <Contact />
                </SuspensePageTransition>
              }
            />

            {/* All Services */}
            <Route
              path="/lumine-law/all-services"
              element={
                <SuspensePageTransition>
                  <AllServices />
                </SuspensePageTransition>
              }
            />

            {/* Immigration */}
            <Route
              path="/lumine-law/all-services/immigration"
              element={
                <SuspensePageTransition>
                  <Immigration />
                </SuspensePageTransition>
              }
            />

            {/* Immigration Sub Service */}
            <Route
              path="/lumine-law/all-services/immigration/spouse-visa"
              element={
                <SuspensePageTransition>
                  <SpouseVisa />
                </SuspensePageTransition>
              }
            />

            {/* Immigration Sub Service */}
            <Route
              path="/lumine-law/all-services/immigration/british-citizenship-application"
              element={
                <SuspensePageTransition>
                  <BritishCitizenshipApplication />
                </SuspensePageTransition>
              }
            />

            {/* Immigration Sub Service */}
            <Route
              path="/lumine-law/all-services/immigration/uk-visitor-visa"
              element={
                <SuspensePageTransition>
                  <VisitorVisa />
                </SuspensePageTransition>
              }
            />

            {/* Immigration Sub Service */}
            <Route
              path="/lumine-law/all-services/immigration/skilled-worker-visa"
              element={
                <SuspensePageTransition>
                  <SkilledWorkerVisa />
                </SuspensePageTransition>
              }
            />

            {/* Immigration Sub Service */}
            <Route
              path="/lumine-law/all-services/immigration/certificate-of-sponsorship"
              element={
                <SuspensePageTransition>
                  <CoS />
                </SuspensePageTransition>
              }
            />

            {/* Immigration Sub Service */}
            <Route
              path="/lumine-law/all-services/immigration/student-visa"
              element={
                <SuspensePageTransition>
                  <StudentVisa />
                </SuspensePageTransition>
              }
            />

            {/* Immigration Sub Service */}
            <Route
              path="/lumine-law/all-services/immigration/entry-clearance"
              element={
                <SuspensePageTransition>
                  <EntryClearance />
                </SuspensePageTransition>
              }
            />

            {/* Immigration Sub Service */}
            <Route
              path="/lumine-law/all-services/immigration/skilled-migrant"
              element={
                <SuspensePageTransition>
                  <SkilledMigrant />
                </SuspensePageTransition>
              }
            />

            {/* Immigration Sub Service */}
            <Route
              path="/lumine-law/all-services/immigration/visa-categories"
              element={
                <SuspensePageTransition>
                  <VisaCategories />
                </SuspensePageTransition>
              }
            />

            {/* Immigration Sub Service */}
            <Route
              path="/lumine-law/all-services/immigration/visa-extensions"
              element={
                <SuspensePageTransition>
                  <VisaExtensions />
                </SuspensePageTransition>
              }
            />

            {/* Immigration Sub Service */}
            <Route
              path="/lumine-law/all-services/immigration/indefinite-leave"
              element={
                <SuspensePageTransition>
                  <IndefiniteLeave />
                </SuspensePageTransition>
              }
            />

            {/* Immigration Sub Service */}
            <Route
              path="/lumine-law/all-services/immigration/human-rights-app"
              element={
                <SuspensePageTransition>
                  <HumanRights />
                </SuspensePageTransition>
              }
            />

            {/* Immigration Sub Service */}
            <Route
              path="/lumine-law/all-services/immigration/discretionary-leave"
              element={
                <SuspensePageTransition>
                  <DiscretionaryLeave />
                </SuspensePageTransition>
              }
            />

            {/* Immigration Sub Service */}
            <Route
              path="/lumine-law/all-services/immigration/bail-revocation"
              element={
                <SuspensePageTransition>
                  <BailRevocation />
                </SuspensePageTransition>
              }
            />

            {/* Immigration Sub Service */}
            <Route
              path="/lumine-law/all-services/immigration/eu-settlement"
              element={
                <SuspensePageTransition>
                  <EuSettlement />
                </SuspensePageTransition>
              }
            />

            {/* Immigration Sub Service */}
            <Route
              path="/lumine-law/all-services/immigration/reviews-appeals"
              element={
                <SuspensePageTransition>
                  <ReviewsAppeals />
                </SuspensePageTransition>
              }
            />

            {/* Immigration Sub Service */}
            <Route
              path="/lumine-law/all-services/immigration/asylum"
              element={
                <SuspensePageTransition>
                  <Asylum />
                </SuspensePageTransition>
              }
            />

            {/* Immigration Sub Service */}
            <Route
              path="/lumine-law/all-services/immigration/innovator-founder"
              element={
                <SuspensePageTransition>
                  <InnovatorFounder />
                </SuspensePageTransition>
              }
            />

            {/* Immigration Sub Service */}
            <Route
              path="/lumine-law/all-services/immigration/creative-worker"
              element={
                <SuspensePageTransition>
                  <CreativeWorker />
                </SuspensePageTransition>
              }
            />

            {/* Family */}
            <Route
              path="/lumine-law/all-services/family-and-children"
              element={
                <SuspensePageTransition>
                  <Family />
                </SuspensePageTransition>
              }
            />

            {/* Family Sub Service */}
            <Route
              path="/lumine-law/all-services/family/divorce"
              element={
                <SuspensePageTransition>
                  <Divorce />
                </SuspensePageTransition>
              }
            />

            {/* Family Sub Service */}
            <Route
              path="/lumine-law/all-services/family/nuptial-agreement"
              element={
                <SuspensePageTransition>
                  <NuptialAgreement />
                </SuspensePageTransition>
              }
            />

            {/* Family Sub Service */}
            <Route
              path="/lumine-law/all-services/family/child-arrangements"
              element={
                <SuspensePageTransition>
                  <ChildArrangements />
                </SuspensePageTransition>
              }
            />

            {/* Family Sub Service */}
            <Route
              path="/lumine-law/all-services/family/parental-responsbility"
              element={
                <SuspensePageTransition>
                  <ParentalResponsiblity />
                </SuspensePageTransition>
              }
            />

            {/* Family Sub Service */}
            <Route
              path="/lumine-law/all-services/family/consent-orders"
              element={
                <SuspensePageTransition>
                  <ConsentOrders />
                </SuspensePageTransition>
              }
            />

            {/* Family Sub Service */}
            <Route
              path="/lumine-law/all-services/family/financial-settlements"
              element={
                <SuspensePageTransition>
                  <FinancialStatements />
                </SuspensePageTransition>
              }
            />

            {/* Family Sub Service */}
            <Route
              path="/lumine-law/all-services/family/domestic-violence"
              element={
                <SuspensePageTransition>
                  <DomesticViolence />
                </SuspensePageTransition>
              }
            />

            {/* Family Sub Service */}
            <Route
              path="/lumine-law/all-services/family/adoption-surrogacy"
              element={
                <SuspensePageTransition>
                  <Adoption />
                </SuspensePageTransition>
              }
            />

            {/* Residential Property */}
            <Route
              path="/lumine-law/all-services/residential"
              element={
                <SuspensePageTransition>
                  <Residential />
                </SuspensePageTransition>
              }
            />

            {/* Residential Subservice */}
            <Route
              path="/lumine-law/all-services/residential/freehold-sales"
              element={
                <SuspensePageTransition>
                  <FreeholdSales />
                </SuspensePageTransition>
              }
            />

            {/* Residential Subservice */}
            <Route
              path="/lumine-law/all-services/residential/freehold-purchases"
              element={
                <SuspensePageTransition>
                  <FreeholdPurchases />
                </SuspensePageTransition>
              }
            />

            {/* Residential Subservice */}
            <Route
              path="/lumine-law/all-services/residential/transfer-of-equity"
              element={
                <SuspensePageTransition>
                  <TransfersOfEquity />
                </SuspensePageTransition>
              }
            />

            {/* Residential Subservice */}
            <Route
              path="/lumine-law/all-services/residential/lease-terms-advice"
              element={
                <SuspensePageTransition>
                  <LeaseTermsAdvice />
                </SuspensePageTransition>
              }
            />

            {/* Commercial Property */}
            <Route
              path="/lumine-law/all-services/commercial"
              element={
                <SuspensePageTransition>
                  <Commercial />
                </SuspensePageTransition>
              }
            />

            {/* Commercial Subservice */}
            <Route
              path="/lumine-law/all-services/commercial/purchase-commercial"
              element={
                <SuspensePageTransition>
                  <PurchaseCommercial />
                </SuspensePageTransition>
              }
            />

            {/* Commercial Subservice */}
            <Route
              path="/lumine-law/all-services/commercial/sales-commercial"
              element={
                <SuspensePageTransition>
                  <SaleCommercial />
                </SuspensePageTransition>
              }
            />

            {/* Commercial Subservice */}
            <Route
              path="/lumine-law/all-services/commercial/business-licenses"
              element={
                <SuspensePageTransition>
                  <BusinessAndLicense />
                </SuspensePageTransition>
              }
            />

            {/* Commercial Subservice */}
            <Route
              path="/lumine-law/all-services/commercial/lease-renewals"
              element={
                <SuspensePageTransition>
                  <LeaseRenewals />
                </SuspensePageTransition>
              }
            />

            {/* Commercial Subservice */}
            <Route
              path="/lumine-law/all-services/commercial/rent-recovery"
              element={
                <SuspensePageTransition>
                  <RentRecovery />
                </SuspensePageTransition>
              }
            />

            {/* Commercial Subservice */}
            <Route
              path="/lumine-law/all-services/commercial/forfeiture-notices"
              element={
                <SuspensePageTransition>
                  <ForfeitureAndNotices />
                </SuspensePageTransition>
              }
            />

            {/* Commercial Subservice */}
            <Route
              path="/lumine-law/all-services/commercial/break-rent"
              element={
                <SuspensePageTransition>
                  <BreakRent />
                </SuspensePageTransition>
              }
            />

            {/* Commercial Subservice */}
            <Route
              path="/lumine-law/all-services/commercial/consent-alterations"
              element={
                <SuspensePageTransition>
                  <ConsentAlterations />
                </SuspensePageTransition>
              }
            />

            {/* Commercial Subservice */}
            <Route
              path="/lumine-law/all-services/commercial/property-dilapidations"
              element={
                <SuspensePageTransition>
                  <PropertyDilapidations />
                </SuspensePageTransition>
              }
            />

            {/* Commercial Subservice */}
            <Route
              path="/lumine-law/all-services/commercial/schedules-conditions"
              element={
                <SuspensePageTransition>
                  <SchedulesConditions />
                </SuspensePageTransition>
              }
            />

            {/* Commercial Subservice */}
            <Route
              path="/lumine-law/all-services/commercial/advice-multiple"
              element={
                <SuspensePageTransition>
                  <AdviceMultiple />
                </SuspensePageTransition>
              }
            />

            {/* Dispute Resolution */}
            <Route
              path="/lumine-law/all-services/dispute-resolution"
              element={
                <SuspensePageTransition>
                  <DisputeResolution />
                </SuspensePageTransition>
              }
            />

            {/* Dispute Resolution Subservice*/}
            <Route
              path="/lumine-law/all-services/dispute-resolution/debt-matters"
              element={
                <SuspensePageTransition>
                  <DebtMatters />
                </SuspensePageTransition>
              }
            />

            {/* Dispute Resolution Subservice*/}
            <Route
              path="/lumine-law/all-services/dispute-resolution/contract-disputes"
              element={
                <SuspensePageTransition>
                  <ContractDisputes />
                </SuspensePageTransition>
              }
            />

            {/* Dispute Resolution Subservice*/}
            <Route
              path="/lumine-law/all-services/dispute-resolution/bankruptcy-matters"
              element={
                <SuspensePageTransition>
                  <CorporatePersonalBankruptcy />
                </SuspensePageTransition>
              }
            />

            {/* Dispute Resolution Subservice*/}
            <Route
              path="/lumine-law/all-services/dispute-resolution/building-contract-disputes"
              element={
                <SuspensePageTransition>
                  <BuildingContractDisputes />
                </SuspensePageTransition>
              }
            />

            {/* Dispute Resolution Subservice*/}
            <Route
              path="/lumine-law/all-services/dispute-resolution/supply-goods-services"
              element={
                <SuspensePageTransition>
                  <SupplyGoodsServices />
                </SuspensePageTransition>
              }
            />

            {/* Dispute Resolution Subservice*/}
            <Route
              path="/lumine-law/all-services/dispute-resolution/building-contracts"
              element={
                <SuspensePageTransition>
                  <BuildingContracts />
                </SuspensePageTransition>
              }
            />

            {/* Dispute Resolution Subservice*/}
            <Route
              path="/lumine-law/all-services/dispute-resolution/debt-recovery"
              element={
                <SuspensePageTransition>
                  <DisputeDebtRecovery />
                </SuspensePageTransition>
              }
            />

            {/* Landlord & Tenant Dispute */}
            <Route
              path="/lumine-law/all-services/landlord-tenant"
              element={
                <SuspensePageTransition>
                  <Landlord />
                </SuspensePageTransition>
              }
            />

            {/* Landlord & Tenant Dispute Subpages */}
            <Route
              path="/lumine-law/all-services/landlord-tenant/possession-claims"
              element={
                <SuspensePageTransition>
                  <PossessionClaims />
                </SuspensePageTransition>
              }
            />

            {/* Landlord & Tenant Dispute Subpages */}
            <Route
              path="/lumine-law/all-services/landlord-tenant/recovery-rent"
              element={
                <SuspensePageTransition>
                  <RecoveryRent />
                </SuspensePageTransition>
              }
            />

            {/* Landlord & Tenant Dispute Subpages */}
            <Route
              path="/lumine-law/all-services/landlord-tenant/claims-disrepair"
              element={
                <SuspensePageTransition>
                  <ClaimsDisrepair />
                </SuspensePageTransition>
              }
            />

            {/* Wills and Probate */}
            <Route
              path="/lumine-law/all-services/wills-probate"
              element={
                <SuspensePageTransition>
                  <WillsAndProbate />
                </SuspensePageTransition>
              }
            />

            {/* Wills and Probate Subservice */}
            <Route
              path="/lumine-law/all-services/wills-probate/wills"
              element={
                <SuspensePageTransition>
                  <Wills />
                </SuspensePageTransition>
              }
            />

            {/* Wills and Probate Subservice */}
            <Route
              path="/lumine-law/all-services/wills-probate/probate"
              element={
                <SuspensePageTransition>
                  <Probate />
                </SuspensePageTransition>
              }
            />

            {/* Wills and Probate Subservice */}
            <Route
              path="/lumine-law/all-services/wills-probate/trusts"
              element={
                <SuspensePageTransition>
                  <Trusts />
                </SuspensePageTransition>
              }
            />

            {/* Wills and Probate Subservice */}
            <Route
              path="/lumine-law/all-services/wills-probate/power-attorney"
              element={
                <SuspensePageTransition>
                  <PowerOfAttorney />
                </SuspensePageTransition>
              }
            />

            {/* Wills and Probate Subservice */}
            <Route
              path="/lumine-law/all-services/wills-probate/estate-planning"
              element={
                <SuspensePageTransition>
                  <EstatePlanning />
                </SuspensePageTransition>
              }
            />

            {/* Wills and Probate Subservice */}
            <Route
              path="/lumine-law/all-services/wills-probate/inheritance-tax-planning"
              element={
                <SuspensePageTransition>
                  <InheritanceTaxPlanning />
                </SuspensePageTransition>
              }
            />

            {/* Wills and Probate Subservice */}
            <Route
              path="/lumine-law/all-services/wills-probate/private-wealth-management"
              element={
                <SuspensePageTransition>
                  <WealthManagement />
                </SuspensePageTransition>
              }
            />

            {/* Wills and Probate Subservice */}
            <Route
              path="/lumine-law/all-services/wills-probate/succession-planning"
              element={
                <SuspensePageTransition>
                  <SuccessionPlanning />
                </SuspensePageTransition>
              }
            />

            {/* Intellectual Property */}
            <Route
              path="/lumine-law/all-services/intellectual-property"
              element={
                <SuspensePageTransition>
                  <IntellectualProperty />
                </SuspensePageTransition>
              }
            />

            {/* Intellectual Property Subservice */}
            <Route
              path="/lumine-law/all-services/intellectual-property"
              element={
                <SuspensePageTransition>
                  <IntellectualProperty />
                </SuspensePageTransition>
              }
            />

            {/* Intellectual Property Subservice */}
            <Route
              path="/lumine-law/all-services/intellectual-property/trademark"
              element={
                <SuspensePageTransition>
                  <Trademark />
                </SuspensePageTransition>
              }
            />

            {/* Intellectual Property Subservice */}
            <Route
              path="/lumine-law/all-services/intellectual-property/copyright"
              element={
                <SuspensePageTransition>
                  <Copyright />
                </SuspensePageTransition>
              }
            />

            {/* Intellectual Property Subservice */}
            <Route
              path="/lumine-law/all-services/intellectual-property/patent"
              element={
                <SuspensePageTransition>
                  <Patent />
                </SuspensePageTransition>
              }
            />

            {/* Property Prices */}
            <Route
              path="/lumine-law/prices/property-prices"
              element={
                <SuspensePageTransition>
                  <PropertyPrices />
                </SuspensePageTransition>
              }
            />

            {/* Debt Recovery Prices */}
            <Route
              path="/lumine-law/prices/debt-recovery"
              element={
                <SuspensePageTransition>
                  <DebtRecovery />
                </SuspensePageTransition>
              }
            />

            {/* Immigration Prices */}
            <Route
              path="/lumine-law/prices/immigration-prices"
              element={
                <SuspensePageTransition>
                  <ImmigrationPrices />
                </SuspensePageTransition>
              }
            />

            {/* About */}
            <Route
              path="/lumine-law/about"
              element={
                <SuspensePageTransition>
                  <About />
                </SuspensePageTransition>
              }
            />

            {/* News */}
            <Route
              path="/lumine-law/news"
              element={
                <SuspensePageTransition>
                  <News />
                </SuspensePageTransition>
              }
            />

            {/* Insights */}
            <Route
              path="/lumine-law/insights"
              element={
                <SuspensePageTransition>
                  <Insights />
                </SuspensePageTransition>
              }
            />

            {/* Article */}
            <Route
              path="/lumine-law/article-page"
              element={
                <SuspensePageTransition>
                  <Article />
                </SuspensePageTransition>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
