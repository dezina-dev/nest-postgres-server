import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OccasionsController } from './occasions.controller';
import { OccasionsService } from './occasions.service';
import { Occasion } from './occasion.entity';
import { User } from 'src/users/user.entity';
import { Gift } from 'src/gifts/gift.entity';
import { Category } from 'src/categories/category.entity';
import { Tag } from 'src/tags/tag.entity';
import { UserRepository } from 'src/users/user.repository';
import { GiftRepository } from 'src/gifts/gift.repository';
import { CategoryRepository } from 'src/categories/category.repository';
import { TagRepository } from 'src/tags/tag.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Occasion,
      User,
      Gift,
      Category,
      Tag,
      UserRepository,
      GiftRepository,
      CategoryRepository,
      TagRepository,
    ]),
  ],
  controllers: [OccasionsController],
  providers: [OccasionsService],
})
export class OccasionsModule {}
