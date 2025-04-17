import { handle } from "hono/vercel";

import { HTTPException } from "hono/http-exception";
import { Hono } from "hono";
import { sample } from "./controllers/(index)";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({ message: "Hello, World!" });
});

app.onError((err, c) => {
  console.log(err);

  if (err instanceof HTTPException) {
    return err.getResponse();
  }

  return c.json({ message: "Internal Error" }, 500);
});

const routes = app.route("/sample", sample);
// .route("/accounts", accounts)
// .route("/categories", categories)
// .route("/transactions", transactions);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
