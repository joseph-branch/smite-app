import { CreateSessionArgs } from "../common/types/session";
import { buildUrl } from "../common/helpers/buildUrl";
import fetch from "isomorphic-fetch";
import { method } from "../common/enums";

export async function createSession(args: CreateSessionArgs) {
  const url = buildUrl(method.createSession);

  const response = await fetch(new URL(url).href);

  if (response.status === 200) {
    console.log("Created Session...");

    return response.json();
  } else {
    console.log(url);
    console.log(response);
  }

  return response.json();
}
