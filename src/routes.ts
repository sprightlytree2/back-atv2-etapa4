import { Router, Request, Response } from "express";

import { deleteProjeto, getProjetos, postProjeto } from "./controller/ProjetoController";

const routes = Router();

routes.get("/home", (request: Request, response: Response) => {
    return response.json({message: "Hello turma!"})
});

routes.get("/projeto", getProjetos);
routes.post("/projeto", postProjeto);
routes.delete("/projeto:id", deleteProjeto)

export default routes;