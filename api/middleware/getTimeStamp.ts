// middlewares/requestLogger.ts
import express, { Request, Response } from 'express';

const requestLogger = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;

  console.log(`[${timestamp}] ${method} ${url}`);
  next();
};

export default requestLogger;
