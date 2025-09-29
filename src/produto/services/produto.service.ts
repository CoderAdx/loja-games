import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Produto } from '../entities/produto.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  async findAll(): Promise<Produto[]> {
    return this.produtoRepository.find({ relations: ['categoria'] });
  }

  async findById(id: number): Promise<Produto> {
    return this.produtoRepository.findOneOrFail({
      where: { id },
      relations: ['categoria'],
    });
  }

  async findByNome(nome: string): Promise<Produto[]> {
    return this.produtoRepository.find({
      where: { nome: ILike(`%${nome}%`) },
      relations: ['categoria'],
    });
  }

  async create(produto: Produto): Promise<Produto> {
    return this.produtoRepository.save(produto);
  }

  async update(produto: Produto): Promise<Produto> {
    return this.produtoRepository.save(produto);
  }

  async delete(id: number): Promise<void> {
    await this.produtoRepository.delete(id);
  }
}
