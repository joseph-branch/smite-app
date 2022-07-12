import { Md5 } from "ts-md5/dist/md5";
import { getTimestamp } from "./getTilmestamp";

export const getMethodSignature = (method: string, timestamp: number) => {
  const md5 = new Md5();

  if (process.env.DEV_ID && process.env.AUTH_KEY) {
    md5
      .appendStr(process.env.DEV_ID)
      .appendStr(method)
      .appendStr(process.env.AUTH_KEY)
      .appendStr(timestamp.toString());
  }

  return md5.end();
};
