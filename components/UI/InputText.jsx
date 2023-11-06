function InputText(props) {
  const {
    labelName,
    inputName,
    onInputTextChange,
    onInputTextBlur,
    inputTextValue,
    hasError,
  } = props;

  let errorMessage = "";

  if (inputName === "name") {
    errorMessage = "Không được để trống mục này!";
  } else if (inputName === "email") {
    errorMessage = "Nhập email hợp lệ!";
  } else if (inputName === "phoneNumber") {
    errorMessage = "Nhập số điện thoại hợp lệ!";
  } else {
    errorMessage = "Nhập giá trị hợp lệ!";
  }

  return (
    <div className="schedule-form__field">
      <label>{labelName}</label>
      <input
        className={`schedule-form__input ${hasError ? "input--warning" : ""}`}
        type="text"
        onChange={onInputTextChange}
        onBlur={onInputTextBlur}
        value={inputTextValue}
      />
      {hasError && <p className="text--warning">{errorMessage}</p>}
    </div>
  );
}

export default InputText;
