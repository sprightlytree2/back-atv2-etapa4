import "reflect-metadata"
import { DataSource } from "typeorm"
import { Projeto } from "./entity/Projeto"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "aws-0-sa-east-1.pooler.supabase.com",
    port: 6543,
    username: "postgres.jhltrejxjaqutzkxfovf",
    password: "nYNWa1bInRpy0aLk",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Projeto],
    migrations: [],
    subscribers: [],
})
