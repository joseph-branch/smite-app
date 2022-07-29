import { getMatchIdsByQueue } from "../../services";
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

processMatches();
