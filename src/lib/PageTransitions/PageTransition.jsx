import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }) => {
  const location = useLocation();

  const pageVariants = {
    // initial: {
    //   opacity: 0,
    //   y: 0,
    // },
    // animate: {
    //   opacity: 1,
    //   y: 0,
    //   transition: {
    //     duration: 0.3,
    //     ease: "easeOut",
    //   },
    // },
    // exit: {
    //   opacity: 0,
    //   y: 0,
    //   transition: {
    //     duration: 0.2,
    //     ease: "easeIn",
    //   },
    // },

    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        style={{ width: "100%", height: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
