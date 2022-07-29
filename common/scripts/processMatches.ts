import { MatchHistoryArgs } from "../types/matchHistory";
import { PrismaClient } from "@prisma/client";
import { buildUrl } from "../helpers/buildUrl";
import { getSessionId } from "../../services";
import { method } from "../enums";
import moment from "moment";

const startDate = moment(20220201, "YYYYMMDD");

const endDate = moment().endOf("day");

let counter = 0;

export const processMatches = async () => {
  let startDateNum = startDate.unix();
  const endDateNum = endDate.unix();

  while (startDateNum < endDateNum) {
    console.log(startDate);
    for (let i = 0; i < 24; i++) {
      await getMatchIdsByQueue(
        { sessionId: "", queue: "450", matchId: i.toString() },
        startDate.utc().format("YYYYMMDD"),
        (counter + 1) % 7000 === 0
      );

      counter += 6;
    }

    startDate.add(1, "day");
    startDateNum = startDate.unix();
  }
};

const prisma = new PrismaClient();

export async function getMatchIdsByQueue(
  args: MatchHistoryArgs,
  date?: string,
  createdNewSession?: boolean
) {
  const sessionId = await getSessionId();

  const url = buildUrl(method.getMatchIdsByQueue, {
    sessionId,
    queue: `${args.queue}/${date}`,
  });

  const lastHour = args.matchId;

  const first = `${url}/${lastHour},00`;

  const second = `${url}/${lastHour},10`;
  const third = `${url}/${lastHour},20`;
  const fourth = `${url}/${lastHour},30`;
  const fifth = `${url}/${lastHour},40`;
  const sixth = `${url}/${lastHour},50`;

  const response = await Promise.all([
    fetch(new URL(first).href),
    fetch(new URL(second).href),
    fetch(new URL(third).href),
    fetch(new URL(fourth).href),
    fetch(new URL(fifth).href),
    fetch(new URL(sixth).href),
  ]);

  const matches = [];

  for (const res of response) {
    matches.push(...(await res.json()));
  }

  if (matches.length === 0) return;

  await prisma.match.createMany({
    data: [
      ...matches.map((m) => {
        return {
          matchId: m["Match"],
          queueId: parseInt(args.queue!),
        };
      }),
    ],
  });

  return {};
}

processMatches();
