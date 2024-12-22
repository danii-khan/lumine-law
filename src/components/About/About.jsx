import React, { Suspense } from "react";
import { Text, Container, Box } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import "../../styles/fonts.css";
import { Helmet } from "react-helmet";
import BannerImg from "../../assets/about/about.webp";
const AllServiceLinks = React.lazy(() => import("../NavLinks/AllServiceLinks"));
const AllPrices = React.lazy(() => import("../NavLinks/AllPrices"));
const AllNewsInsights = React.lazy(() => import("../NavLinks/AllNewsInsights"));

const About = () => {
  return (
    <>
      <Container
        width="100vw"
        maxWidth="100%"
        minHeight="100vh"
        backgroundColor={"white"}
        overflow="auto"
        m={0}
        p={0}
        display="flex"
        flexDirection="column"
      >
        <Helmet>
          <title>Lumine Law About Us</title>
        </Helmet>

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          {/* Banner */}
          <Box
            width={"100%"}
            height={{
              xs: "75px",
              lg: "100px",
              xl: "125px",
              "2xl": "150px",
            }}
            bgImage={`url(${BannerImg})`}
            bgSize={"cover"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            _loading={"eager"}
          >
            <Text
              fontSize={{ xs: "20px", lg: "30px", xl: "36px", "2xl": "45px" }}
              fontWeight={600}
              fontFamily={"CeraRoundPro"}
              fontStyle={"italic"}
              width={"90%"}
              textAlign={"left"}
            >
              About Us
            </Text>
          </Box>

          {/* Content */}
          <Box
            width={"100%"}
            display={"flex"}
            flexFlow={"column"}
            color={"black"}
          >
            <Box
              width={"90%"}
              alignSelf={"center"}
              mb={"5%"}
              my={{ xs: "5%", md: "2.5%" }}
            >
              {/* Heading */}
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={500}
                fontSize={{
                  xs: "20px",
                  sm: "22px",
                  md: "24px",
                  lg: "28px",
                  xl: "32px",
                  "2xl": "36px",
                }}
                textAlign={"left"}
                mb={"2.5%"}
              >
                Who are Lumine Solicitors?
              </Text>

              {/* Content */}
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{
                  xs: "12px",
                  sm: "14px",
                  md: "15px",
                  lg: "16px",
                  xl: "17px",
                  "2xl": "18px",
                }}
                textAlign={"justify"}
              >
                Lumine Solicitors is an SRA regulated firm of solicitors. We
                offer the dedicated support and advice you require from the very
                outset of your matter. We provide a remarkably personal and
                approachable service, whatever your legal service requirements
                may be. We are well known for the calibre of advice we provide
                and the successful outcomes we acquire for our clients. Lumine
                Solicitors in London adopts an entirely transparent and
                professional approach, and we focus on delivering cost-effective
                solutions to our clients. During times of personal difficulty,
                we always strive to successfully resolve challenging and
                technical aspects of disputes and applications. We represent
                both individuals and businesses. Our Solicitors are dedicated to
                client care and will fully explain the services we will be
                providing and a full breakdown and explanation of costs and
                charges will be provided from the outset of the matter. We
                provide all our clients with premium and bespoke legal services
                and support. Our aim is to simplify the process of accessing
                quality legal support, irrespective of financial or other
                restrictions. We do provide free initial consultations during
                which all available options will be discussed. We build and
                maintain relationships with our clients that are based on mutual
                respect. Our hard-earned reputation is based on traditional
                client centred values, and our objective is to meet our clients
                needs in every matter. We correspond with clients in a manner
                that is best suited to their individual needs. We can use video
                calls for meetings and appointments where appropriate. Clients
                are always made aware of our terms of business and costs, who is
                dealing with their matter, and regular updates on any
                developments in their case. We are a modern, progressive and
                growing firm located close to three central London tube
                stations, Gloucester Road, Earl’s Court and South Kensington. We
                are also a 4-minute drive from Harrods. Furthermore, we are
                conveniently located outside of the congestion zone.
              </Text>
            </Box>
          </Box>

          {/* Other Services */}
          <Suspense fallback={<div>Loading All Services ...</div>}>
            <AllServiceLinks />
          </Suspense>

          {/* Prices */}
          <Suspense fallback={<div>Loading All Prices...</div>}>
            <AllPrices />
          </Suspense>

          {/* News and Insights */}
          <Suspense fallback={<div>Loading All News and Insights...</div>}>
            <AllNewsInsights />
          </Suspense>

          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default About;
