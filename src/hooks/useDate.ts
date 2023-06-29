import dayjs from "dayjs";

export default function () {
  const NowDate = dayjs().format("YYYY-MM-DD");
  const NowDayOfWeek = dayjs().format("YYYY-MM-DD ddd");

  return {
    NowDate,
    NowDayOfWeek,
  };
}

export const transformedDateWithoutDayOfWeek = (inputDate: string) =>
  dayjs(inputDate, "YYYY-MM-DD ddd").format("YYYY-MM-DD");

export const transformedDateToDayOfWeek = (inputDate: string) =>
  dayjs(inputDate, "YYYY-MM-DD").format("YYYY-MM-DD ddd");
