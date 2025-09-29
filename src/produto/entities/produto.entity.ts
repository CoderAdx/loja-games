import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity('produtos')
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false })
  nome: string;

  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;

  @Column({ length: 255, nullable: true })
  descricao: string;

  @ManyToOne(() => Categoria, (categoria) => categoria.produtos, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}
