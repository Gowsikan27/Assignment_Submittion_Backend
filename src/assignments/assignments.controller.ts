import { Controller, Post, Body ,Get} from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { Put, Param } from '@nestjs/common';
import { Delete } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  constructor(private readonly assignmentService: AssignmentsService) {}

  @Post()
  create(@Body() body: any) {
    return this.assignmentService.create(body);
  }

  @Get()
findAll() {
  return this.assignmentService.findAll();
}

@Put(':id')
update(@Param('id') id: string, @Body() body: any) {
  return this.assignmentService.update(id, body);
}
@Delete(':id')
delete(@Param('id') id: string) {
  return this.assignmentService.delete(id);
}

}