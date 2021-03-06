import { handlerPath } from "@libs/handlerResolver";
import schema from "./schema";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "patch",
        path: "users/{userId}",
        request: {
          schema: {
            "application/json": schema,
          },
        },
      },
    },
  ],
};
