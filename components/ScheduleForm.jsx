import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "@/store/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import {
  dateTimeValidateFn,
  emailInputValidateFn,
  nameInputValidateFn,
  phoneNumberInputValidateFn,
  positiveNumberValidateFn,
  specifiedHourInputValidateFn,
} from "@/utils/validationFnList";

import Button from "./UI/Button";
import InputDate from "./UI/InputDate";
import InputText from "./UI/InputText";
import useInput from "@/utils/hooks/useInput";

function ScheduleForm() {
  const dispatch = useDispatch();

  const {
    value: enteredReturnDate,
    isValid: enteredReturnDateIsValid,
    hasError: returnDateInputHasError,
    valueChangeHandler: returnDateInputChangeHandler,
    inputBlurHandler: returnDateInputBlurHandler,
    reset: resetReturnDateInput,
  } = useInput(dateTimeValidateFn);

  const {
    value: enteredDateArrive,
    isValid: enteredDateArriveIsValid,
    hasError: dateArriveInputHasError,
    valueChangeHandler: dateArriveInputChangeHandler,
    inputBlurHandler: dateArriveInputBlurHandler,
    reset: resetDateArriveInput,
  } = useInput(dateTimeValidateFn);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput(nameInputValidateFn);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput(emailInputValidateFn);

  const {
    value: enteredPhoneNumber,
    isValid: enteredPhoneNumberIsValid,
    hasError: phoneNumberInputHasError,
    valueChangeHandler: phoneNumberInputChangeHandler,
    inputBlurHandler: phoneNumberInputBlurHandler,
    reset: resetPhoneNumberInput,
  } = useInput(phoneNumberInputValidateFn);

  const {
    value: enteredSpecifiedHour,
    isValid: enteredSpecifiedHourIsValid,
    hasError: specifiedHourInputHasError,
    valueChangeHandler: specifiedHourInputChangeHandler,
    inputBlurHandler: specifiedHourInputBlurHandler,
    reset: resetSpecifiedHourInput,
  } = useInput(specifiedHourInputValidateFn);

  const {
    value: enteredDelayHour,
    isValid: enteredDelayHourIsValid,
    hasError: delayHourInputHasError,
    valueChangeHandler: delayHourInputChangeHandler,
    inputBlurHandler: delayHourInputBlurHandler,
    reset: resetdelayHourInput,
  } = useInput(positiveNumberValidateFn);

  const [enteredLocation, setEnteredLocation] = useState("Đà Nẵng");
  const [errorDayChoosen, setErrorDayChoosen] = useState(false);

  const isShow = useSelector((state) => state.schedule.scheduleStatus);

  let formIsValid = false;
  if (
    enteredDateArriveIsValid &&
    enteredDelayHourIsValid &&
    enteredEmailIsValid &&
    enteredNameIsValid &&
    enteredPhoneNumberIsValid &&
    enteredReturnDateIsValid &&
    enteredSpecifiedHourIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      //Chưa nhập form mà submit thì sẽ hiển thị lỗi ở tất cả các input
      nameInputBlurHandler();
      emailInputBlurHandler();
      delayHourInputBlurHandler();
      dateArriveInputBlurHandler();
      returnDateInputBlurHandler();
      phoneNumberInputBlurHandler();
      specifiedHourInputBlurHandler();

      return;
    }

    //Khi ngày đến < Ngày đi
    const dateArrive = new Date(enteredDateArrive);
    const returnDate = new Date(enteredReturnDate);
    const period = returnDate - dateArrive;

    if (period < 0) {
      setErrorDayChoosen(true);
      return;
    }

    dispatch(
      userActions.setUserData({
        dateArrive: enteredDateArrive,
        returnDate: enteredReturnDate,
        name: enteredName,
        phone: enteredPhoneNumber,
        email: enteredEmail,
        specifiedHour: enteredSpecifiedHour,
        delayHour: enteredDelayHour,
        location: enteredLocation,
      })
    );

    //CLEAR INPUT FIELDS
    setErrorDayChoosen(false);
  };

  return (
    <div className={`pt-16 ${isShow ? "block" : "hidden"}`}>
      <div className="w-[calc(100%-20px)] bg-white mx-auto rounded-md">
        <header className="flex justify-start items-center gap-2 border-dotted border-b-[1px] border-grey px-3 py-4">
          <FontAwesomeIcon icon={faBookmark} />
          <h1 className="text-lg font-semibold">LẬP LỊCH TRÌNH</h1>
        </header>
        <form
          className="schedule-form text-strong-grey grid grid-cols-2 gap-x-3 gap-y-4 auto-rows-[minmax(90px,_1fr)] md:grid-cols-3 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-4 xl:grid-cols-6 px-4 py-5"
          onSubmit={submitHandler}
        >
          <InputDate
            labelName="Ngày đến"
            spanContent="(yyyy/MM/dd HH:mm)"
            inputType="text"
            inputName="dateArrive"
            onInputTextChange={dateArriveInputChangeHandler}
            onInputTextBlur={dateArriveInputBlurHandler}
            inputTextValue={enteredDateArrive}
            hasError={dateArriveInputHasError}
            errorDayChoosen={errorDayChoosen}
          />
          <InputDate
            labelName="Ngày đi"
            spanContent="(yyyy/MM/dd HH:mm)"
            inputType="text"
            inputName="dateArrive"
            onInputTextChange={returnDateInputChangeHandler}
            onInputTextBlur={returnDateInputBlurHandler}
            inputTextValue={enteredReturnDate}
            hasError={returnDateInputHasError}
            errorDayChoosen={errorDayChoosen}
          />
          <InputText
            labelName="Họ và tên"
            inputName="name"
            onInputTextChange={nameInputChangeHandler}
            onInputTextBlur={nameInputBlurHandler}
            inputTextValue={enteredName}
            hasError={nameInputHasError}
          />
          <InputText
            labelName="Số điện thoại"
            inputName="phoneNumber"
            onInputTextChange={phoneNumberInputChangeHandler}
            onInputTextBlur={phoneNumberInputBlurHandler}
            inputTextValue={enteredPhoneNumber}
            hasError={phoneNumberInputHasError}
          />
          <InputText
            labelName="Email"
            inputName="email"
            onInputTextChange={emailInputChangeHandler}
            onInputTextBlur={emailInputBlurHandler}
            inputTextValue={enteredEmail}
            hasError={emailInputHasError}
          />
          <InputDate
            labelName="Giờ quy định"
            spanContent="(HH:mm)"
            inputType="text"
            inputName="specifiedHour"
            onInputTextChange={specifiedHourInputChangeHandler}
            onInputTextBlur={specifiedHourInputBlurHandler}
            inputTextValue={enteredSpecifiedHour}
            hasError={specifiedHourInputHasError}
          />
          <InputDate
            labelName="Giờ Delay"
            spanContent="(H)"
            inputType="number"
            minNumber="0"
            inputName="delayHour"
            onInputTextChange={delayHourInputChangeHandler}
            onInputTextBlur={delayHourInputBlurHandler}
            inputTextValue={enteredDelayHour}
            hasError={delayHourInputHasError}
          />

          <div className="schedule-form__field">
            <label htmlFor="position">Chọn địa điểm</label>
            <select
              name="position"
              className="schedule-form__input"
              onChange={(e) => setEnteredLocation(e.target.value)}
              value={enteredLocation}
            >
              <option value="Đà Nẵng">Đà Nẵng</option>
              <option value="Hồ Chí Minh">Hồ Chí Minh</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Huế">Huế</option>
            </select>
          </div>
          <Button
            className={`w-[110px] h-[40px] bg-pink md:self-center lg:self-start xl:self-center xl:justify-self-center ${
              !formIsValid ? "cursor-no-drop" : "btn--trans1"
            }`}
            disabled={!formIsValid ? "true" : "false"}
          >
            Build
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ScheduleForm;
