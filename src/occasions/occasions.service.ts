import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm'; // Import FindOneOptions
import { Occasion } from './occasion.entity';
import { User } from 'src/users/user.entity';
import { Gift } from 'src/gifts/gift.entity';
import { Category } from 'src/categories/category.entity';
import { Tag } from 'src/tags/tag.entity';

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

@Injectable()
export class OccasionsService {
  constructor(
    @InjectRepository(Occasion)
    private occasionRepository: Repository<Occasion>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Gift)
    private giftRepository: Repository<Gift>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}

  async create(occasion: Occasion): Promise<ApiResponse<Occasion>> {

    // Create instances of related entities
    const user = await this.userRepository.save(occasion.user);
    const gifts = await this.giftRepository.save(occasion.gifts);
    const category = await this.categoryRepository.save(occasion.category);
    const tags = await this.tagRepository.save(occasion.tags);

    // Assign the created related entities to the occasion
    occasion.user = user;
    occasion.gifts = gifts;
    occasion.category = category;
    occasion.tags = tags;

    // Save the occasion
    const savedOccasion = await this.occasionRepository.save(occasion);

    return { success: true, message: 'Occasion created successfully', data: savedOccasion };
  }

  async findAll(): Promise<ApiResponse<Occasion[]>> {
    const occasions = await this.occasionRepository.find({
      relations: ['user', 'gifts', 'category', 'tags'],
    });
  
    return { success: true, message: 'Occasions retrieved successfully', data: occasions };
  }

  async findOne(id: number): Promise<ApiResponse<Occasion>> {
    const occasion = await this.occasionRepository.findOne({
      where: { id },
      relations: ['user', 'gifts', 'category', 'tags'],
    });

    if (!occasion) {
      throw new NotFoundException(`Occasion with id ${id} not found`);
    }

    return { success: true, message: 'Occasion retrieved successfully', data: occasion };
  }

  async update(id: number, occasion: Occasion): Promise<ApiResponse<Occasion>> {
    await this.findOne(id); // Check if the occasion exists
    const updatedOccasion = await this.occasionRepository.save({ id, ...occasion });
    return { success: true, message: 'Occasion updated successfully', data: updatedOccasion };
  }

  async remove(id: number): Promise<ApiResponse<void>> {
    await this.findOne(id); // Check if the occasion exists
    await this.occasionRepository.delete(id);
    return { success: true, message: 'Occasion deleted successfully' };
  }
}
