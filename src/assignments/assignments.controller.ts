import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';

@Controller('assignments') // ✅ VERY IMPORTANT
export class AssignmentsController {
  constructor(private readonly service: AssignmentsService) {}

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}