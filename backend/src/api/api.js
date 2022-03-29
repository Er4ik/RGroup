import { Router } from "express";
import { initAuthAPI } from "./auth";

const apis = [initAuthAPI];

const initAPI = (app) => {
    const apiRouter = Router();

    apis.forEach((api) => api(apiRouter));
    app.use("/", apiRouter);

    return apiRouter;
}

export { initAPI }