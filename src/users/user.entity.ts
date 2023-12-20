import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Occasion } from '../occasions/occasion.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Occasion, occasion => occasion.user)
  @JoinColumn()
  occasion: Occasion;
}
