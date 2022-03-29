import { Router } from 'express';

const initAuthAPI = (apiRouter) => {
    const authRouter = Router();

    apiRouter.use("/auth", authRouter);

    authRouter.get("/root", async (req, res) => {
        return res.status(200).json("Hello World!");
    })

    return authRouter;
}

export { initAuthAPI }