import { api } from "../..";
import serverless from "serverless-http";

export const handler = serverless(api);
