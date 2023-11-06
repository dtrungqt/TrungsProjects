import { useEffect, useState } from "react";
import Cirlelayout from "./UI/CircleLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faComments,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Aside() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else setShow(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Cuộn mượt
    });
  };

  return (
    <div className="fixed bottom-6 right-3 flex flex-col gap-4">
      <Cirlelayout className="bg-red1">
        <FontAwesomeIcon
          icon={faComments}
          style={{ color: "#f5f5f5" }}
          size="2xl"
        />
      </Cirlelayout>
      <Cirlelayout className="bg-red1">
        <FontAwesomeIcon
          icon={faPhone}
          size="2xl"
          style={{ color: "#ffffff" }}
        />
      </Cirlelayout>
      <img
        src="./images/lucky-wheel.png"
        alt="lucky wheel"
        className="w-12 h-12"
      />
      <Cirlelayout
        className={`bg-white ${show ? "block" : "hidden"}`}
        onClickHandler={scrollToTop}
      >
        <FontAwesomeIcon
          icon={faArrowUp}
          style={{ color: "#ef5a39" }}
          size="2xl"
        />
      </Cirlelayout>
    </div>
  );
}

export default Aside;
