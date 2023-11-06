import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Menu from "./UI/Menu";

function Navigation() {
  const [showSecondNav, setShowSecondNav] = useState(false);
  const menuClickHandler = () => {
    setShowSecondNav((prevState) => !prevState);
  };

  return (
    <nav className="fixed w-full bg-orange py-1 shadow-[0px_1px_7px_2px_rgba(0,0,0,0.5)] z-10">
      <div className="container-wrap flex justify-between items-center">
        <a className="w-[40px] h-[40px] bg-white rounded-[50%]" href="/">
          <img src="./images/logo-single.png" className="object-cover" />
        </a>
        <FontAwesomeIcon
          onClick={menuClickHandler}
          icon={showSecondNav ? faXmark : faBars}
          size="2xl"
          style={{ color: "#ffffff" }}
          className="sm:hidden"
        />
        <div className=" items-center justify-between gap-2 hidden sm:flex">
          <Menu />
        </div>
      </div>
      {showSecondNav && (
        <div className="container-wrap flex justify-center items-center gap-5 py-2 sm:hidden">
          <Menu />
        </div>
      )}
    </nav>
  );
}

export default Navigation;
