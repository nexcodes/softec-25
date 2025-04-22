import { handle } from "hono/vercel";
import {db} from "@/lib/db";
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


//defining CRUD for lawyers
app.get("/lawyers", async (c) => {
  try {
    let page = Number(c.req.query("page")) || 1;
    let limit = Number(c.req.query("limit")) || 10;

    if (page < 1) page = 1;
    if (limit < 1 || limit > 100) limit = 10;

    const skip = (page - 1) * limit;

    const lawyers = await db.Lawyer.findMany({
      where: { isVerified: true },
      skip,
      take: limit,
    });

    if (!lawyers || lawyers.length === 0) {
      return c.json(
        {
          message: "No verified lawyers found.",
          page,
          data: [],
        },
        200
      );
    }

    return c.json({
      message: "Verified lawyers retrieved successfully.",
      page,
      data: lawyers,
    });
  } catch (error) {
    console.error("Error fetching lawyers:", error);
    return c.json(
      {
        message: "An error occurred while fetching lawyers.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      500
    );
  }
});





export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
