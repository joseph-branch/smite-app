import { PrismaClient } from "@prisma/client";
import { add } from "date-fns";
import { createSession } from ".";

export async function getSessionId() {
  const prisma = new PrismaClient();

  const foundSession = await prisma.smiteSession.findMany({
    select: { sessionId: true, timestamp: true },
    take: 1,
    orderBy: {
      timestamp: "desc",
    },
  });

  const session = foundSession?.at(0);

  const sessionId = session?.sessionId;
  const timestamp = session?.timestamp;

  const isValidSession =
    (timestamp as unknown as number) > new Date().getTime();

  if (sessionId && isValidSession) {
    console.log("Using Existing Session...");

    return sessionId;
  } else {
    const createdSession = await createSession({});

    console.log(createdSession);

    if (createdSession?.session_id) {
      await prisma.smiteSession.create({
        data: {
          sessionId: createdSession.session_id,
          timestamp: add(new Date(), { minutes: 15 }).getTime().toString(),
        },
      });

      return createdSession.session_id;
    } else {
      return undefined;
    }
  }
}
