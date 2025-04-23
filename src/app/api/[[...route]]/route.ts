import { handle } from "hono/vercel";
import { Prisma } from "@prisma/client";
import {db} from "@/lib/db";
import { HTTPException } from "hono/http-exception";
import { Hono } from "hono";
import { sample } from "./controllers/(index)";
import { metadata } from "@/app/layout";

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

    const lawyers = await db.lawyer.findMany({
      where: { isVerified: true },
      skip,
      take: limit,
    });
    const totalLawyers = await db.lawyer.count();
    const totalPages = Math.ceil(totalLawyers / limit);

    if (!lawyers || lawyers.length === 0) {
      return c.json(
        {
          message: "No verified lawyers found.",
          status: 200,
          data: [],
          metadata: {
            page,
            limit,
            totalPages,
            totalLawyers,
          }
        },
        200
      );
    }
    return c.json({
      message: "Verified lawyers retrieved successfully.",
      status: 200,
      data: lawyers,
      metadata: {
        page,
        limit,
        totalPages,
        totalLawyers,
      }
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


app.post("/lawyers", async (c) => {
  try {
    const lawyerData = await c.req.json();
    const lawyer = await db.lawyer.create({ data: lawyerData });

    return c.json({
      message: "Lawyer created successfully.",
      data: lawyer,
      status: 201
    });

  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      const target = (error.meta?.target as string[]) || [];

      if (target.includes("cnic")) {
        return c.json({ message: "A lawyer with this CNIC already exists." }, 409);
      } else if (target.includes("licenseNo")) {
        return c.json({ message: "A lawyer with this license number already exists." }, 409);
      } else {
        return c.json({ message: "A unique field already exists." }, 409);
      }
    }

    return c.json(
      {
        message: "An error occurred while creating the lawyer.",
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
