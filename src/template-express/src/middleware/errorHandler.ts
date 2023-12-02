// https://expressjs.com/en/guide/error-handling.html#catching-errors

import { Request, Response, NextFunction } from "express";
import { CustomError } from "../error";

function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (res.headersSent) {
    return next(err);
  }
  if (err instanceof CustomError) {
    const { statusCode, errors, logging } = err;
    if (logging) {
      console.error(
        JSON.stringify(
          {
            code: err.statusCode,
            errors: err.errors,
            stack: err.stack,
          },
          null,
          2
        )
      );
    }

    res.status(statusCode).send({ errors });
    return;
  }

  // Unhandled errors
  console.error(JSON.stringify(err, null, 2));
  res.status(500).send({ errors: [{ message: "Something went wrong" }] });
}

export { errorHandler };
