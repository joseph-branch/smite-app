import { format } from "date-fns";
import moment from "moment";

export const getTimestamp = () => {
  const now = new Date();

  const date = new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds()
  );

  console.log(now.getUTCFullYear());
  console.log(now.getUTCMonth());
  console.log(now.getUTCDate());
  console.log(now.getUTCHours());
  console.log(now.getUTCMinutes());
  console.log(now.getUTCSeconds());

  const formattedDate = parseInt(moment().utc().format("YYYYMMDDHHmmss")); //format(date, "yyyyMMddHHmmss") as unknown as number;

  return formattedDate;
};
