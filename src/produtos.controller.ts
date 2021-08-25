import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('produtos')
export class ProdutosController{

    @Get()
    obterTodos(): string {
        return 'Lista Todos os Produtos';
    }

    @Get(':id')
    obterUm(@Param() params): string{
        return `Retorna os dados do produto ${params.id}`;
    }

    @Post()
    criar(@Body() produto): string{
        return `Produto: ${produto} criado!`;
    }

    @Put()
    alterar(@Body() produto): string{
        return `Produto: ${produto} atualizado!`;
    }

    @Delete(':id')
    apagar(@Param() params): string{
        return `Produto: ${params.id} apagado!`
    }
}