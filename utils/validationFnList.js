export const nameInputValidateFn = (value) => {
  if (value.trim() !== "") {
    return true;
  }
  return false;
};

export const emailInputValidateFn = (value) => {
  if (value.trim() !== "" && value.includes("@")) {
    return true;
  }
  return false;
};

export const phoneNumberInputValidateFn = (value) => {
  if (value.trim() !== "" && !isNaN(value)) {
    return true;
  }
  return false;
};

export const specifiedHourInputValidateFn = (inputTime) => {
  const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
  return timePattern.test(inputTime);
};

export const positiveNumberValidateFn = (value) => {
  if (value.trim() !== "" && !isNaN(value) && value >= 0) {
    return true;
  }
  return false;
};

export const dateTimeValidateFn = (value) => {
  const dateTimePattern =
    /^(\d{4})\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1]) (0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/;
  return dateTimePattern.test(value);
};
//
