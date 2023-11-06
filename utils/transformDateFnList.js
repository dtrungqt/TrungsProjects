export const getDayMonthYearFn = (dateValue) => {
  const day = dateValue.getDate();
  const month = dateValue.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
  const year = dateValue.getFullYear();

  // Đảm bảo rằng ngày và tháng đều có hai chữ số
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${formattedDay}-${formattedMonth}-${year}`;
};

export const getHourMinuteFn = (dateValue) => {
  const hours = dateValue.getHours();
  const minutes = dateValue.getMinutes();
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}h${formattedMinutes}`;
};

export const getDateFn = (dateValue) => {
  const day = dateValue.getDate();
  const month = dateValue.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
  const year = dateValue.getFullYear();
  const hours = dateValue.getHours();
  const minutes = dateValue.getMinutes();
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${year}/${formattedMonth}/${formattedDay} ${formattedHours}:${formattedMinutes}`;
};

export const millisecondToDay = (millisecond) => {
  return millisecond / (24 * 60 * 60 * 1000);
};
