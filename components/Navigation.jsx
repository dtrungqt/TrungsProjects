import { useDispatch } from "react-redux";
import Button from "@/components/UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { scheduleActions } from "@/store/scheduleSlice";

function Navigation() {
  const dispatch = useDispatch();

  const scheduleBtnClick = (e) => {
    e.preventDefault();
    dispatch(scheduleActions.toggleScheduleStatus());
  };

  return (
    <nav className="fixed w-full bg-orange py-1 shadow-[0px_1px_7px_2px_rgba(0,0,0,0.5)] z-10">
      <div className="container flex justify-between items-center">
        <a className="w-[40px] h-[40px] bg-white rounded-[50%]" href="/">
          <img src="./images/logo-single.png" className="object-cover" />
        </a>
        <div className="flex items-center justify-between gap-2">
          <Button
            className="bg-yellow btn--trans1"
            onClickHandler={scheduleBtnClick}
          >
            <FontAwesomeIcon
              icon={faCalendarDays}
              style={{ color: "#ffffff" }}
            />
            <span>Lập lịch trình</span>
          </Button>
          <Button className="bg-yellow btn--trans1">
            <FontAwesomeIcon
              icon={faRightToBracket}
              style={{ color: "#ffffff" }}
            />
            <span>Đăng nhập</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
