import * as services from "../../services";

import { NextApiRequest, NextApiResponse } from "next";

import { createJRPCServer } from "libjrpc";

const jrpcServer = createJRPCServer({
  createSession: services.createSession,
  getUsers: services.getUsers,
  getSessionId: services.getSessionId,
  getPlayerIdByName: services.getPlayerIdByName,
  getGods: services.getGods,
  getCharacters: services.getCharacters,
  getCharacterById: services.getCharacterById,
  getItems: services.getItems,
  getMatchHistory: services.getMatchHistory,
  getMatchIdsByQueue: services.getMatchIdsByQueue,
  getMatchPlayerDetails: services.getMatchPlayerDetails,
  getPlayer: services.getPlayer,
  getPlayers: services.getPlayers,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await jrpcServer.handleRequest(req.body);

  res.json({ data: response });
}
