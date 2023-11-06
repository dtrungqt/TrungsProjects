function InputDate(props) {
  const {
    labelName,
    spanContent,
    inputType,
    minNumber,
    inputName,
    onInputTextChange,
    onInputTextBlur,
    inputTextValue,
    hasError,
  } = props;

  let errorMessage = "";

  if (inputName === "specifiedHour") {
    errorMessage = "Nhập đúng định dạng giờ, phút như mẫu!";
  } else if (inputName === "delayHour") {
    errorMessage = "Nhập đúng định dạng giờ như mẫu!";
  } else if (inputName === "dateArrive") {
    errorMessage = "Nhập đúng định dạng ngày giờ như mẫu!";
  } else {
    errorMessage = "Nhập giá trị hợp lệ!";
  }

  return (
    <div className="schedule-form__field">
      <label>
        {labelName}
        <span className="schedule-form__field__span">{spanContent}</span>
      </label>
      {inputType === "text" && (
        <input
          type={inputType}
          className={`schedule-form__input ${hasError ? "input--warning" : ""}`}
          onChange={onInputTextChange}
          onBlur={onInputTextBlur}
          value={inputTextValue}
        />
      )}
      {inputType === "number" && (
        <input
          type={inputType}
          min={minNumber}
          className={`schedule-form__input ${hasError ? "input--warning" : ""}`}
          onChange={onInputTextChange}
          onBlur={onInputTextBlur}
          value={inputTextValue}
        />
      )}
      {hasError && <p className="text--warning">{errorMessage}</p>}
    </div>
  );
}

export default InputDate;
