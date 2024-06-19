import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Projeto {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    orcamento: number

    @Column()
    tipo_projeto: string

    @Column()
    contato: string

    @Column()
    prev_inic: string

    @Column()
    prev_fim: string

    @Column()
    descricao: string
}
