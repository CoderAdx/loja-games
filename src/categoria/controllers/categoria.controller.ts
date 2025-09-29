import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Categoria } from '../entities/categoria.entity';
import { CategoriaService } from '../services/categoria.service';

@Controller('categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<Categoria> {
    return this.categoriaService.findById(id);
  }

  @Get('/nome/:nome')
  findByNome(@Param('nome') nome: string): Promise<Categoria[]> {
    return this.categoriaService.findByNome(nome);
  }

  @Post()
  create(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.create(categoria);
  }

  @Put()
  update(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.update(categoria);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.categoriaService.delete(id);
  }
}
