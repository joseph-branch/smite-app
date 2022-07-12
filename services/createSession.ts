import { CreateSessionArgs } from "../common/types/session";
import fetch from "isomorphic-fetch";
import { getMethodSignature } from "../common/helpers/getMethodSignature";
import { getTimestamp } from "../common/helpers/getTilmestamp";
import { method } from "../common/enums";

export async function createSession(args: CreateSessionArgs) {
  const timestamp = getTimestamp();

  const signature = getMethodSignature(method.createSession, timestamp);

  const url = `${process.env.BASE_URL}/${method.createSession}json/${process.env.DEV_ID}/${signature}/${timestamp}`;

  const response = await fetch(new URL(url).href);

  if (response.status === 200) {
    return response.json();
  } else {
    console.log(url);
    console.log(response);
  }

  return response;
}
