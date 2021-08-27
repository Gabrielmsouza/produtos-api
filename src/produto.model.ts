
import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class Produto extends Model<Produto>{
    @Column({
        type: DataType.STRING(60),
        allowNull: false
    })
    private codigo: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    private nome: string;

    @Column({ 
        type: DataType.DECIMAL(10,2),
        allowNull: false
    })
    private preco: number;

    public get Codigo(): string {
        return this.codigo
    }

    public get Nome(): string {
        return this.nome;
    }
 
    public get Preco(): number {
        return this.preco;
    }



}