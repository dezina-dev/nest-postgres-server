import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { User } from '../users/user.entity';
import { Gift } from 'src/gifts/gift.entity';
import { Category } from 'src/categories/category.entity';
import { Tag } from 'src/tags/tag.entity';

@Entity()
export class Occasion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // One-to-One relationship
  @OneToOne(() => User, user => user.occasion)
  user: User;

  // One-to-Many relationship
  @OneToMany(() => Gift, gift => gift.occasion)
  gifts: Gift[];

  // Many-to-One relationship
  @ManyToOne(() => Category, category => category.occasions)
  category: Category;

  // Many-to-Many relationship
  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];
}