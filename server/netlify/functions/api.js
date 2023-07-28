import serverless from "serverless-http";
import { api } from "../..";

export const handler = serverless(api);
