import { Fragment } from "react";

import Navigation from "@/components/Navigation";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";

function HomePage() {
  return (
    <Fragment>
      <Navigation />
      <MainContent />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
