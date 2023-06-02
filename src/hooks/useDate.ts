/* eslint-disable prettier/prettier */

export default function () {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = ("0" + (currentDate.getMonth() + 1)).slice(-2); // 月份补零
  const currentDay = ("0" + currentDate.getDate()).slice(-2); // 日期补零
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDayOfWeek = daysOfWeek[currentDate.getDay()];

  const NowMonth = currentYear + "-" + currentMonth;
  const NowDate = currentYear + "-" + currentMonth + "-" + currentDay;
  const NowDayOfWeek =
    currentYear + "-" + currentMonth + "-" + currentDay + " " + currentDayOfWeek;

  return { NowMonth, NowDate, NowDayOfWeek };
}
