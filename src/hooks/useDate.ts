import dayjs from "dayjs";

export default function () {
  const currentDate = dayjs();
  const NowMonth = currentDate.format("YYYY-MM");
  const NowDate = currentDate.format("YYYY-MM-DD");
  const NowDayOfWeek = currentDate.format("YYYY-MM-DD ddd");

  return { NowMonth, NowDate, NowDayOfWeek };
}
