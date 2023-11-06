import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faPlaneArrival,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  getDayMonthYearFn,
  getHourMinuteFn,
  millisecondToDay,
} from "@/utils/transformDateFnList";

import Button from "./UI/Button";
import scheduleData from "@/data/scheduleData";
import AddForm from "./UI/AddForm";
import "react-vertical-timeline-component/style.min.css";

function ScheduleContent() {
  const [statusBtn, setStatusBtn] = useState("");
  const [statusRemoveIcon, setStatusRemoveIcon] = useState("");
  const [statusPlusIcon, setStatusPlusIcon] = useState("");
  const userData = useSelector((state) => state.user);
  const scheduleStatus = useSelector((state) => state.schedule.scheduleStatus);
  const [scheduleDataUpdate, setScheduleDataUpdate] = useState([]);
  const [statusAddForm, setStatusAddForm] = useState("");
  const [displayAddFormToggle, setDisplayAddFormToggle] = useState(false);

  const mouseEnterBtnHandler = (e) => {
    // console.log(e.target.parentElement.className);
    setStatusBtn(e.target.parentElement.className);
  };

  const mouseEnterRemoveIconHandler = (e) => {
    // console.log(e);
    setStatusRemoveIcon(e.target.id);
  };

  const mouseEnterPlusIconHandler = (e) => {
    // console.log(e.target.id);
    setStatusPlusIcon(e.target.id);
  };

  const displayAddFormHandler = (e) => {
    setStatusAddForm(e.target.id);
    // if (e.target.id !== "") {
    setDisplayAddFormToggle((prev) => !prev);
    // }
  };

  let dateArrive;
  let returnDate;

  const [dateArriveFormated, setDateArriveFormated] = useState();
  const [returnDateFormated, setReturnDateFormated] = useState();
  const [arriveHour, setArriveHour] = useState();

  //
  useEffect(() => {
    //
    if (userData.dateArrive === "") {
      dateArrive = new Date();
      returnDate = new Date(dateArrive.getTime() + 6 * 24 * 60 * 60 * 1000); // Cộng thêm 6 ngày - Trong JS thoi gian tinh bang ms
    } else {
      dateArrive = new Date(userData.dateArrive);
      returnDate = new Date(userData.returnDate);
    }

    setDateArriveFormated(getDayMonthYearFn(dateArrive));
    setReturnDateFormated(getDayMonthYearFn(returnDate));
    setArriveHour(getHourMinuteFn(dateArrive));
    //
    const period = returnDate - dateArrive;

    const differentDay = millisecondToDay(period);
    // console.log(differentDay);

    const scheduleDataFormated = [];
    for (let i = 0; i <= differentDay; i++) {
      const currentDay = new Date(
        dateArrive.getTime() + i * 24 * 60 * 60 * 1000
      );
      const plan = {
        id: i + 1,
        day: i + 1,
        date: getDayMonthYearFn(currentDay),
      };
      if (i <= 6) {
        plan.todo = scheduleData[i].todo;
      } else if (i > 6 && i < differentDay) {
        //nếu khoảng thời gian tham quan > 7: 7 là số ngày có trong data => Tự tạo thêm thuộc tính todo
        const ramdom1To5 = Math.floor(Math.random() * 6) || 1; //chỉ lấy từ 1-5
        plan.todo = scheduleData[ramdom1To5].todo;
      } else {
        plan.todo = scheduleData[6].todo;
      }
      scheduleDataFormated.push(plan);
    }
    // console.log(scheduleDataFormated);
    setScheduleDataUpdate(scheduleDataFormated);
  }, [userData.dateArrive, userData.returnDate]);

  // console.log(scheduleDataUpdate);

  return (
    <div className={`${!scheduleStatus ? "pt-16" : ""}`}>
      <VerticalTimeline>
        <VerticalTimelineElement
          position="right"
          icon={
            <FontAwesomeIcon
              icon={faPlaneArrival}
              style={{ color: "#ffffff" }}
            />
          }
          iconClassName={"bg-orange"}
        >
          <h2 className="bg-orange px-3 py-4 rounded-[0.25em]">{`LỊCH TRÌNH DU LỊCH: KHOẢNG THỜI GIAN (${dateArriveFormated} - ${returnDateFormated})`}</h2>
          <div className="px-2 pt-3 pb-5 text-grey">
            <h3>
              Tolerably earnestly middleton extremely distrusts she boy now not.
              Add and offered prepare how cordial.
            </h3>
          </div>
        </VerticalTimelineElement>
        {/* LỊCH TRÌNH TỪ NGÀY 1 ĐẾN NGÀY CUỐI  */}
        {scheduleDataUpdate.map((data, i) => {
          const indexParent = i;
          let displayBtn = "hidden";
          let displayPlusIcon = "hidden";
          let displayAddForm = false;

          if (statusAddForm && Number(statusAddForm) === indexParent) {
            displayAddForm = displayAddFormToggle;
          }

          // console.log(displayAddForm);
          //kiểm tra chính xác đối tượng được mouseOver vào là đối tượng có class selected nào, để chỉ hiển thị BTN ở đối tượng đó - Nếu không kiểm tra như này thì BTN sẽ được hiển thị ở tất cả đối tượng
          if (statusBtn && typeof statusBtn === "string") {
            if (statusBtn.includes(`selected-${indexParent}`)) {
              displayBtn = "flex";
            }
          }

          if (statusPlusIcon && Number(statusPlusIcon) === indexParent) {
            displayPlusIcon = "block";
          }

          const addActivityHandler = (activity) => {
            const scheduleDataCurrent = JSON.parse(
              JSON.stringify(scheduleDataUpdate)
            );
            scheduleDataCurrent[indexParent].todo.push(activity);
            setScheduleDataUpdate(scheduleDataCurrent);

            // ẩn Form
            // setStatusAddForm("");
            setStatusAddForm("");
            setDisplayAddFormToggle((prev) => !prev);
          };

          return (
            <VerticalTimelineElement
              key={indexParent}
              position={!(indexParent % 2) ? "left" : "right"}
              icon={
                <FontAwesomeIcon icon={faStar} style={{ color: "#ffffff" }} />
              }
              iconClassName={"bg-orange"}
            >
              <header
                className="bg-orange px-3 py-4 rounded-[0.25em] flex justify-between items-center"
                id={indexParent}
                onMouseOver={mouseEnterPlusIconHandler}
                onMouseOut={() => {
                  setStatusPlusIcon("");
                }}
              >
                <h2 id={indexParent}>{`Ngày ${data.day}: (${data.date}) ${
                  i === 0 ? `Khung giờ: ${arriveHour} - 21h00` : ""
                }`}</h2>
                <img
                  // src="plus.svg"
                  // alt="plus icon"
                  src={`${displayAddFormToggle ? "xmark.svg" : "plus.svg"}`}
                  alt="plus icon"
                  id={indexParent}
                  className={`cursor-pointer ${displayPlusIcon}`}
                  onClick={displayAddFormHandler}
                />
              </header>
              <div
                className={`min-h-[175px] pl-2 pr-3 text-grey selected-${indexParent}`}
                onMouseOver={mouseEnterBtnHandler}
                onMouseOut={() => {
                  setStatusBtn("");
                }}
              >
                {data.todo.map((activity, index) => {
                  let displayRemoveIcon = "hidden";
                  if (statusRemoveIcon) {
                    if (
                      Number(statusRemoveIcon) === index &&
                      displayBtn === "flex"
                    ) {
                      displayRemoveIcon = "inline";
                    }
                  }

                  const removeActivityHandler = () => {
                    const scheduleDataCurrent = JSON.parse(
                      JSON.stringify(scheduleDataUpdate)
                    );
                    scheduleDataCurrent[indexParent].todo.splice(index, 1);
                    setScheduleDataUpdate(scheduleDataCurrent);

                    setStatusRemoveIcon(""); // nếu không có lệnh này thì chỉ khi di chuyển chuột ra khỏi dấu X thì Giao diện ms được cập nhật
                    // console.log(scheduleDataCurrent[indexParent].todo);
                    // console.log(activity, index, indexParent);
                  };

                  return (
                    <h3
                      key={index}
                      id={index}
                      className={`py-2 selected-${indexParent}`}
                      onMouseOver={mouseEnterRemoveIconHandler}
                      onMouseOut={() => {
                        setStatusRemoveIcon("");
                      }}
                    >
                      {activity}
                      <span
                        id={index}
                        className={`ml-2 text-black font-bold cursor-pointer font-sans selected-${indexParent} ${displayRemoveIcon}`}
                        onClick={removeActivityHandler}
                      >
                        X
                      </span>
                    </h3>
                  );
                })}
                <AddForm
                  displayStatus={displayAddForm}
                  // displayStatus={displayAddFormToggle}
                  onAddActivity={addActivityHandler}
                  addedClass={`selected-${indexParent}`}
                />
                <footer
                  className={`justify-end pt-3 gap-2 pb-5 selected-${i} ${displayBtn}`}
                >
                  <Button className="bg-dark-green btn--trans2">
                    VIEW 360
                  </Button>
                  <Button className="bg-dark-green btn--trans2">
                    CHI TIẾT
                  </Button>
                </footer>
              </div>
            </VerticalTimelineElement>
          );
        })}
        <VerticalTimelineElement
          icon={
            <FontAwesomeIcon
              icon={faPlaneDeparture}
              style={{ color: "#ffffff" }}
            />
          }
          iconClassName={"bg-orange"}
        ></VerticalTimelineElement>
      </VerticalTimeline>
      <footer className="flex justify-end gap-2 mr-7 pb-10">
        <Button className="bg-pink btn--trans1">Đặt hàng</Button>
        <Button className="bg-green btn--trans1">Xuất lịch trình</Button>
      </footer>
    </div>
  );
}

export default ScheduleContent;
