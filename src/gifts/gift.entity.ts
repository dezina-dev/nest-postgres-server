import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Occasion } from '../occasions/occasion.entity';

@Entity()
export class Gift {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Occasion, occasion => occasion.gifts)
  occasion: Occasion;
}
