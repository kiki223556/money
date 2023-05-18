export default function () {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  const currentDayOfWeek = currentDate.getDay();

  let dayOfWeekText = "";
  switch (currentDayOfWeek) {
    case 0:
      dayOfWeekText = "星期日";
      break;
    case 1:
      dayOfWeekText = "星期一";
      break;
    case 2:
      dayOfWeekText = "星期二";
      break;
    case 3:
      dayOfWeekText = "星期三";
      break;
    case 4:
      dayOfWeekText = "星期四";
      break;
    case 5:
      dayOfWeekText = "星期五";
      break;
    case 6:
      dayOfWeekText = "星期六";
      break;
    default:
      dayOfWeekText = "";
  }

  const NowMonth = currentYear + "-" + currentMonth;
  const NowDate = currentYear + "-" + currentMonth + "-" + currentDay;
  const NowDayOfWeek =
    currentYear + "-" + currentMonth + "-" + currentDay + " " + dayOfWeekText;

  return { NowMonth, NowDate, NowDayOfWeek };
}
