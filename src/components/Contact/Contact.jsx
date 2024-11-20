import { Container } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <Container
        className="scroll-container"
        width="100vw"
        maxWidth="100%"
        height="100vh"
        overflow="auto"
        m={0}
        p={0}
        background="linear-gradient(0deg, 
    #000000 12.5%, 
    #124F66 35.68%, 
    #249ECB 47.23%, 
    #124F66 58.12%, 
    #1B7798 67%, 
    #000000 93%
  )"
      >
        <Navbar />
        <h1>hello</h1>
        <Footer />
      </Container>
    </>
  );
};

export default Contact;
