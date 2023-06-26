import dayjs from "dayjs";

export default function () {
  const currentDate = dayjs();
  const NowMonth = currentDate.format("YYYY-MM");
  const NowDate = currentDate.format("YYYY-MM-DD");
  const NowDayOfWeek = currentDate.format("YYYY-MM-DD ddd");
  const ISO8601 = currentDate.toISOString();

  return {
    NowMonth,
    NowDate,
    NowDayOfWeek,
    ISO8601,
  };
}

export const transformedDateWithoutDayOfWeek = (inputDate: string) =>
  dayjs(inputDate, "YYYY-MM-DD ddd").format("YYYY-MM-DD");

export const transformedDateToDayOfWeek = (inputDate: string) =>
  dayjs(inputDate, "YYYY-MM-DD").format("YYYY-MM-DD ddd");
