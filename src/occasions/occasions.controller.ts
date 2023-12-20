import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { OccasionsService } from './occasions.service';
import { Occasion } from './occasion.entity';

interface ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
  }

@Controller('occasions')
export class OccasionsController {
  constructor(private readonly occasionsService: OccasionsService) {}

  @Post()
  create(@Body() occasion: Occasion): Promise<ApiResponse<Occasion>> {
    return this.occasionsService.create(occasion);
  }

  @Get()
  findAll(): Promise<ApiResponse<Occasion[]>> {
    return this.occasionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ApiResponse<Occasion>> {
    return this.occasionsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() occasion: Occasion): Promise<ApiResponse<Occasion>> {
    return this.occasionsService.update(+id, occasion);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<ApiResponse<void>> {
    return this.occasionsService.remove(+id);
  }
}