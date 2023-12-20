import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Occasion } from '../occasions/occasion.entity';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Occasion, occasion => occasion.tags)
  occasions: Occasion[];
}
