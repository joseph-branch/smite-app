import { CreateSessionArgs } from "../common/types/session";
import { buildUrl } from "../common/helpers/buildUrl";
import fetch from "isomorphic-fetch";
import { method } from "../common/enums";

export async function createSession(args: CreateSessionArgs) {
  const url = buildUrl(method.createSession);

  console.log(url);

  const response = await fetch(new URL(url).href);

  if (response.status === 200) {
    return response.json();
  } else {
    console.log(url);
    console.log(response);
  }

  return response;
}
