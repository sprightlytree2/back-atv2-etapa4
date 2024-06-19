import { Router, Request, Response } from "express";

import { deleteProjeto, getProjeto, getProjetos, postProjeto, updateProjeto } from "./controller/ProjetoController";

const routes = Router();

routes.get("/home", (request: Request, response: Response) => {
    return response.json({message: "Hello turma!"})
});

routes.get("/projeto", getProjetos);
routes.get("/projeto/:id", getProjeto);
routes.post("/projeto", postProjeto);
routes.put("/projeto/:id", updateProjeto);
routes.delete("/projeto/:id", deleteProjeto);

export default routes;