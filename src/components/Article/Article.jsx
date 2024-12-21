import React from "react";
import {
  Text,
  Container,
  Box,
  List,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import AllNewsInsights from "../NavLinks/AllNewsInsights";
import AllPrices from "../NavLinks/AllPrices";
import AllServiceLinks from "../NavLinks/AllServiceLinks";
import BannerImg from "../../assets/article/article.png";
import ImageOne from "../../assets/landing/news-insights-two.png";
import ImageTwo from "../../assets/landing/news-insights-four.png";
import "../../styles/fonts.css";

// Constants
const FONT_STYLES = {
  heading: {
    fontFamily: "CeraRoundPro",
    fontWeight: 600,
    fontSize: {
      xs: "20px",
      lg: "18px",
      xl: "24px",
      "2xl": "26px",
    },
    textAlign: "left",
    my: { xs: "0.5%", md: "1%" },
    color: "black",
    mb: "10px",
  },
  body: {
    fontFamily:
      "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
    fontSize: {
      xs: "14px",
      lg: "16px",
      xl: "18px",
      "2xl": "20px",
    },
    textAlign: "justify",
    color: "black",
  },
  list: {
    textAlign: "left",
    fontSize: {
      xs: "12px",
      sm: "12px",
      md: "14px",
      lg: "14px",
      xl: "16px",
      "2xl": "18px",
    },
    fontFamily:
      "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
    color: "black",
  },
};

// Reusable components
const ContentBox = ({ children, mb = "5%" }) => (
  <Box
    width="90%"
    alignSelf="center"
    mb={mb}
    display="flex"
    flexFlow="column"
    justifyContent="center"
    alignItems="flex-start"
    gap="16px"
  >
    {children}
  </Box>
);

const HeadingText = ({ children, ...props }) => (
  <Text {...FONT_STYLES.heading} {...props}>
    {children}
  </Text>
);

const BodyText = ({ children, weight = 400, ...props }) => (
  <Text {...FONT_STYLES.body} fontWeight={weight} {...props}>
    {children}
  </Text>
);

const ProcessStep = ({ title, description }) => (
  <>
    <BodyText weight={600}>{title}</BodyText>
    <BodyText>{description}</BodyText>
  </>
);

const Article = () => {
  const headerIntroContent = [
    {
      text: "Understand the role of Solicitors in London in property transactions. Learn why choosing local solicitors in London offers a personal touch, in-depth market knowledge, and seamless access to essential services for residential and commercial real estate needs.",
      weight: 600,
    },
    {
      text: "Property transactions are important financial decisions that people make in their lifetime. These transactions are complex, so it's crucial to have professional legal guidance. Solicitors in London play a crucial role in ensuring property transactions proceed smoothly and legally. These legal professionals handle various aspects of property law, from conducting thorough searches to managing contract negotiations. The best lawyers bring extensive experience in property law and local market knowledge to each transaction.",
      weight: 600,
    },
    {
      text: "This article gives an overview about the important role of property solicitors in London, exploring their services, the conveyancing process, and the advantages of choosing London-based legal representation for property matters.",
      weight: 600,
    },
  ];

  const keyServices = [
    "Conducting thorough title searches and due diligence",
    "Performing local authority and environmental searches",
    "Managing property information forms and boundary disputes",
    "Overseeing secure transfer of funds and settling property debts",
    "Handling stamp duty requirements and land registry registration",
  ];

  const localNetworks = [
    "Local authority departments",
    "Major lending institutions",
    "Property developers and agents",
    "Building surveyors and valuers",
  ];

  const references = [
    "https://www.elitelawsolicitors.co.uk/commercial-conveyancing/",
    "https://nested.com/blog/posts/what-does-a-property-solicitor-do",
  ];

  return (
    <>
      <Container
        width="100vw"
        maxWidth="100%"
        minHeight="100vh"
        backgroundColor="white"
        overflow="auto"
        m={0}
        p={0}
        display="flex"
        flexDirection="column"
      >
        <Helmet>
          <title>Lumine Law Intellectual Property Services</title>
        </Helmet>

        <Box width="100%" flex="1" p={0} m={0} pt="50px">
          {/* Banner */}
          <Box
            width="100%"
            height={{
              xs: "200px",
              lg: "250px",
              xl: "300px",
              "2xl": "350px",
            }}
            bgImage={`url(${BannerImg})`}
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              fontSize={{ xs: "20px", lg: "30px", xl: "36px", "2xl": "45px" }}
              fontWeight={600}
              fontFamily="CeraRoundPro"
              fontStyle="italic"
              width="90%"
              textAlign="left"
              backgroundColor="rgba(2, 2, 2, 0.21)"
              borderRadius="8px"
            >
              Understanding the role of Solicitors in London in Property
              Transactions
            </Text>
          </Box>

          {/* Content Sections */}
          <Box width="100%" display="flex" flexFlow="column" color="white">
            {/* Header Section */}
            <ContentBox>
              <Text
                fontFamily="CeraRoundPro"
                fontSize={{ xs: "8px", lg: "10px", xl: "12px", "2xl": "12px" }}
                fontWeight={500}
                textAlign="left"
                my={{ xs: "0.5%", md: "1%" }}
                color="black"
              >
                John Doe | 13th December, 2022
              </Text>

              {headerIntroContent.map((content, index) => (
                <BodyText key={index} weight={content.weight}>
                  {content.text}
                </BodyText>
              ))}
            </ContentBox>

            {/* Essential Services Section */}
            <ContentBox>
              <HeadingText>
                Essential Services Provided by London Property Solicitors
              </HeadingText>

              <Grid
                templateColumns={{ xs: "1fr", lg: "repeat(3, 1fr)" }}
                width="100%"
                gap="5%"
                mb={{ xs: "1%", lg: "2.5%" }}
              >
                <GridItem
                  colSpan={2}
                  display="flex"
                  flexFlow="column"
                  gap="20px"
                >
                  <BodyText>
                    Property solicitors offer a comprehensive range of legal
                    services essential for successful property transactions.
                    These legal professionals specialize in navigating the
                    complex process of property transactions, ensuring all legal
                    aspects are handled with precision and care.
                  </BodyText>
                  <BodyText>
                    Document Preparation and Review Services: Property
                    solicitors in London handle the preparation and examination
                    of crucial legal documents, including drafting contracts of
                    sale, mortgage agreements, and other relevant contracts.
                  </BodyText>
                </GridItem>
                <GridItem colSpan={1}>
                  <Image
                    src={ImageOne}
                    alt="Placeholder Image One"
                    height="200px"
                    width="100%"
                    borderRadius="8px"
                    mb={"10px"}
                  />
                </GridItem>
              </Grid>

              <BodyText>
                They ensure these documents accurately reflect agreed-upon terms
                while protecting their clients' interests throughout the
                transaction process.
              </BodyText>

              <BodyText>
                Communication and Coordination: A vital aspect of their service
                involves acting as intermediaries between various parties.
                Lawyers communicate and negotiate with buyers, sellers, real
                estate agents, mortgage lenders, and relevant government
                agencies.
              </BodyText>

              <Grid
                templateColumns={{ xs: "1fr", lg: "repeat(2, 1fr)" }}
                width="100%"
                gap="5%"
                my={{ xs: "1%", lg: "2.5%" }}
              >
                <GridItem>
                  <Image
                    src={ImageTwo}
                    alt="Placeholder Image Two"
                    height="300px"
                    width="100%"
                    borderRadius="8px"
                  />
                </GridItem>
                <GridItem display="flex" flexFlow="column" gap="20px">
                  <BodyText>
                    Key services provided by London property solicitors include:
                  </BodyText>
                  <List.Root {...FONT_STYLES.list} fontWeight={500}>
                    {keyServices.map((service, index) => (
                      <List.Item key={index}>{service}</List.Item>
                    ))}
                  </List.Root>
                  <HeadingText>
                    Role of Solicitors in London in process of Conveyancing
                  </HeadingText>
                </GridItem>
              </Grid>
            </ContentBox>

            {/* Conveyancing Process Section */}
            <ContentBox>
              <BodyText>
                The conveyancing process in London property transactions follows
                a structured approach that ensures legal compliance and
                protection for all parties involved. Such lawyers manage this
                complicated process through multiple stages.
              </BodyText>

              <ProcessStep
                title="1. The Commercial Conveyancing Process for Buyers"
                description="The commercial conveyancing process for buyers involves several key steps:"
              />

              {/* Buyer Process Steps */}
              <ProcessStep
                title="Instruction of a solicitor for commercial conveyancing"
                description="Engage a solicitor experienced in commercial conveyancing to handle legal aspects and represent your interests."
              />

              <ProcessStep
                title="Due Diligence"
                description="Conduct thorough research on the property, including title checks and necessary searches (local authority, 
                planning, environmental) to uncover any legal issues or restrictions."
              />

              <ProcessStep
                title="Negotiating and Drafting Contracts"
                description="Negotiate contract terms with the seller's solicitor, covering price, completion date, and special conditions."
              />

              <ProcessStep
                title="Financing"
                description="Secure financing through a commercial mortgage or other means like a bridging loan."
              />

              <ProcessStep
                title="Exchange of Contracts"
                description="Exchange contracts and pay a deposit, making the agreement legally binding."
              />

              <ProcessStep
                title="Completion"
                description="Transfer the remaining purchase price on the completion date to officially take ownership of the property."
              />

              <ProcessStep
                title="Post-Completion Formalities"
                description="Pay any Stamp Duty Land Tax (SDLT), submit an SDLT return to HMRC, and register the property in your name at HM Land Registry."
              />

              <ProcessStep
                title="2. The Commercial Conveyancing Process for Sellers"
                description="For sellers, the conveyancing process includes:"
              />

              {/* Seller Process Steps */}
              <ProcessStep
                title="Appointing a Solicitor for Commercial Conveyancing"
                description="Hire a commercial conveyancing solicitor to manage legalities, prepare sale documents, and represent your interests."
              />

              <ProcessStep
                title="Preparation of Sale Documents"
                description="Prepare the title pack, draft contract, replies to standard commercial enquiries (CPSE), and provide access to the Energy Performance Certificate (EPC)."
              />

              <ProcessStep
                title="Negotiations"
                description="Negotiate the terms of the sale with the buyer's solicitor and amend the contract as needed."
              />

              <ProcessStep
                title="Answering Queries"
                description="Respond to additional enquiries or requests for information from the buyer."
              />

              <ProcessStep
                title="Exchange of Contracts"
                description="Exchange contracts to make the agreement legally binding."
              />

              <ProcessStep
                title="Completion"
                description="Vacate the property, discharge any existing mortgages, hand over the keys, and transfer ownership to the buyer on the completion date."
              />

              <ProcessStep
                title="Post-Completion"
                description="Handle the repayment of any outstanding mortgage and transfer of funds through your solicitor."
              />
            </ContentBox>

            {/* Why Choose London Solicitors Section */}
            <ContentBox>
              <HeadingText>
                "Why Choose Solicitors Based in London?"
              </HeadingText>

              <BodyText>
                London's property market has distinct challenges and
                opportunities that need specialized knowledge and understanding
                of the local market. Selecting a London-based solicitor for
                property transactions offers distinct advantages as compared to
                a solicitor based outside London.
              </BodyText>

              <ProcessStep
                title="Local Market Expertise"
                description="Property solicitors in London have valuable knowledge about the city's property market. They understand 
                the different areas and types of properties, which helps them anticipate problems and offer customized solutions."
              />

              <ProcessStep
                title="Regulatory Knowledge and Networks"
                description="The top solicitors in London have strong professional networks in the city's property sector. 
                These networks include relationships with:"
              />

              <List.Root {...FONT_STYLES.list} fontWeight={400}>
                {localNetworks.map((network, index) => (
                  <List.Item key={index}>{network}</List.Item>
                ))}
              </List.Root>

              <ProcessStep
                title="Accessibility and Personal Service"
                description="Top solicitors in London provide the benefit of in-person meetings, which can be important for complicated property transactions. Being located in the capital means they are readily available for urgent document reviews or last-minute contract changes."
              />

              <ProcessStep
                title="Market-Specific Experience"
                description="London property solicitors are experts in dealing with specific aspects of the property market in the capital. This includes leasehold arrangements, conservation areas, and listed buildings. Their specialized knowledge is extremely valuable when it comes to understanding and complying with London's property regulations and planning requirements."
              />
            </ContentBox>

            {/* Conclusion Section */}
            <ContentBox>
              <HeadingText>Conclusion</HeadingText>
              <BodyText>
                Property transactions in London require expert legal guidance
                because the city has a complex property landscape and
                significant financial implications. Solicitors in London are
                essential partners throughout the property transaction process.
                They have specialized knowledge and provide dedicated support
                beyond basic legal services. These solicitors understand local
                regulations, have established professional networks, and can
                navigate the unique property challenges in London. They ensure
                compliance, protect client interests, and facilitate efficient
                communication between all parties involved. Choosing qualified
                legal representation is crucial for successful property
                transactions in London. Professional solicitors combine their
                expertise in property law with deep knowledge of the local
                market, delivering results that justify their fees and provide
                peace of mind during the conveyancing process.
              </BodyText>
            </ContentBox>

            {/* References Section */}
            <ContentBox>
              <HeadingText>References</HeadingText>
              {references.map((url, index) => (
                <Text
                  key={index}
                  as={Link}
                  to={url}
                  {...FONT_STYLES.body}
                  fontWeight={400}
                  _hover={{ color: "#beab7c" }}
                  cursor="pointer"
                >
                  [{index + 1}] -{" "}
                  <span style={{ textDecoration: "underline" }}>{url}</span>
                </Text>
              ))}
            </ContentBox>
          </Box>

          {/* Navigation Components */}
          <AllServiceLinks />
          <AllPrices />
          <AllNewsInsights />
          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default Article;
