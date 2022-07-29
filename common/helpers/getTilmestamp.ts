import moment from "moment";

export const getTimestamp = () => {
  return parseInt(moment().utc().format("YYYYMMDDHHmmss"));
};
