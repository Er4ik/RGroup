import express from "express";
import cors from "cors";
import { sequelize } from "./data/db/connection";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

(async function sequelizeInit() {
    await sequelize.authenticate();
    console.log("---> Database connection successful <---");

    await sequelize.sync();
    console.log("---> Database sync successful <---");
})();

app.use(cors());

app.listen(port, () => {
    console.log(`---> Server listening on port ${port} <---`);
});
