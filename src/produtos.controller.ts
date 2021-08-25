import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produto.model";

@Controller('produtos')
export class ProdutosController{

    listaProdutos: Produto[] = [
        new Produto("12D", "Harry Potter", 29.90),
        new Produto("HH92", "Clean Code", 19.90)
    ];

    @Get()
    obterTodos(): Produto[] {
        return this.listaProdutos;
    }

    @Get(':id')
    obterUm(@Param() params): Produto{
        return this.listaProdutos[params.id];
    }

    @Post()
    criar(@Body() produto: Produto){
        this.listaProdutos.push(produto);
    }

    @Put()
    alterar(@Body() produto: Produto): Produto{
        return produto;
    }

    @Delete(':id')
    apagar(@Param() params){
        this.listaProdutos.pop();
    }
}