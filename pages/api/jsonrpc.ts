import { createJRPCServer } from "libjrpc";
import { NextApiRequest, NextApiResponse } from "next";
import * as services from "../../services";

const jrpcServer = createJRPCServer({
  getUsers: services.getUsers,
  getAppName: services.getAppName
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await jrpcServer.handleRequest(req.body);

  res.json({ data: response });
}
