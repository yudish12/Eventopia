import { Router } from "express";
import { helloAuth } from "../controllers/auth";

const authRouter: Router = Router();

authRouter.route("/").get(helloAuth);

export default authRouter;
