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
/*
export const postProjeto = async (request: Request, response: Response) => {

    

    const savedPost = await postRepository.save(newPost);

    return response.json(savedPost);
} */