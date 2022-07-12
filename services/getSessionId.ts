import { PrismaClient } from "@prisma/client";
import { createSession } from ".";

export async function getSessionId() {
  const prisma = new PrismaClient();

  const session = await prisma.smiteSession.findMany({
    select: { sessionId: true },
    take: 1,
  });
  console.log(session);

  const sessionId = session?.at(0)?.sessionId;

  if (sessionId) {
    return sessionId;
  } else {
    const createdSession = await createSession({});

    if (createdSession?.sessionId) {
      prisma.smiteSession.create({
        data: {
          sessionId: createdSession.sessionId,
          timestamp: new Date().valueOf(),
        },
      });

      return createdSession.sessionId;
    } else {
      console.log(createdSession);

      return undefined;
    }
  }
}
