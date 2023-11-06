import { Fragment } from "react";

import Navigation from "@/components/Navigation";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";
import Aside from "@/components/Aside";

function HomePage() {
  return (
    <Fragment>
      <Navigation />
      <MainContent />
      <Footer />
      <Aside />
    </Fragment>
  );
}

export default HomePage;
