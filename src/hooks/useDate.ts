import dayjs from "dayjs";
import { reactive } from "vue";

export default function () {
  const NowDate = dayjs().format("YYYY-MM-DD");
  const NowDayOfWeek = dayjs().format("YYYY-MM-DD ddd");

  return {
    NowDate,
    NowDayOfWeek,
  };
}

export const sharedState = reactive({
  year: dayjs().year(),
  month: dayjs().month() + 1,
});

export const transformedDateWithoutDayOfWeek = (inputDate: string) =>
  dayjs(inputDate, "YYYY-MM-DD ddd").format("YYYY-MM-DD");

export const transformedDateToDayOfWeek = (inputDate: string) =>
  dayjs(inputDate, "YYYY-MM-DD").format("YYYY-MM-DD ddd");
