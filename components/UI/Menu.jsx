import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { scheduleActions } from "@/store/scheduleSlice";
import Button from "@/components/UI/Button";

function Menu() {
  const dispatch = useDispatch();
  const scheduleBtnClick = (e) => {
    e.preventDefault();
    dispatch(scheduleActions.toggleScheduleStatus());
  };
  return (
    <Fragment>
      <Button
        className="bg-yellow btn--trans1"
        onClickHandler={scheduleBtnClick}
      >
        <FontAwesomeIcon icon={faCalendarDays} style={{ color: "#ffffff" }} />
        <span>Lập lịch trình</span>
      </Button>
      <Button className="bg-yellow btn--trans1">
        <FontAwesomeIcon icon={faRightToBracket} style={{ color: "#ffffff" }} />
        <span>Đăng nhập</span>
      </Button>
    </Fragment>
  );
}

export default Menu;
