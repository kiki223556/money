/* eslint-disable prettier/prettier */
export default function () {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  const NowMonth = currentYear + "-" + currentMonth;
  const NowDate = currentYear + "-" + currentMonth + "-" + currentDay;
  const NowDayOfWeek = currentYear + "-" + currentMonth + "-" + currentDay + " Today";

  return { NowMonth, NowDate, NowDayOfWeek };
}
