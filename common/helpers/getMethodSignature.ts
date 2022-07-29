import { Md5 } from "ts-md5/dist/md5";
import { getTimestamp } from "./getTilmestamp";

export const getMethodSignature = (method: string, timestamp: number) => {
  const md5 = new Md5();

  if (process.env.SECONDARY_DEV_ID && process.env.SECONDARY_AUTH_KEY) {
    md5
      .appendStr(process.env.SECONDARY_DEV_ID)
      .appendStr(method)
      .appendStr(process.env.SECONDARY_AUTH_KEY)
      .appendStr(timestamp.toString());
  }

  return md5.end();
};
