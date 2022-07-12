import * as services from "../../services";

import { NextApiRequest, NextApiResponse } from "next";

import { createJRPCServer } from "libjrpc";

const jrpcServer = createJRPCServer({
  createSession: services.createSession,
  getUsers: services.getUsers,
  getAppName: services.getAppName,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await jrpcServer.handleRequest(req.body);

  res.json({ data: response });
}
