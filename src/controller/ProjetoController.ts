import { AppDataSource } from "../data-source";
import { Projeto } from "../entity/Projeto";
//import { PostDto } from "../Dtos/PostDto";
//import { plainToInstance } from 'class-transformer';

import { Request, Response } from "express";

const projetoRepository = AppDataSource.getRepository(Projeto);

export const getProjetos = async (request: Request, response: Response) => {
    const projetos = await projetoRepository.find();
    return response.json(projetos);
}

export const postProjeto = async (request: Request, response: Response) => {
    const projeto = await projetoRepository.save(request.body)
    return response.json(projeto);
}

export const updateProjeto = async (request: Request, response: Response) => {
    const {id} = request.params;
    const projeto = await projetoRepository.update(id, request.body)

    if(projeto.affected){
        const itemUpdated = await projetoRepository.findOneBy({id: parseInt(id)})
        return response.json(itemUpdated);
    }
    else
        return response.status(404).json({message: "Projeto não encontrado"})
}

export const deleteProjeto = async (request: Request, response: Response) => {
    const {id} = request.params;
    const projeto = await projetoRepository.delete(id);

    if(projeto.affected){
        return response.status(204).json({message: "Projeto excluído com sucesso"});
    }
    else
        return response.status(404).json({message: "Projeto não encontrado"})
}