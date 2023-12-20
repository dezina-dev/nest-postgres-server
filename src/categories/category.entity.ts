import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Occasion } from '../occasions/occasion.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Occasion, occasion => occasion.category)
  occasions: Occasion[];
}
