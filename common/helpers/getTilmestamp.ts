import { format } from "date-fns";

export const getTimestamp = () => {
  var now = new Date();

  const date = new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds()
  );

  const formattedDate = format(date, "yyyyMMddHHmmss") as unknown as number;

  return formattedDate;
};
