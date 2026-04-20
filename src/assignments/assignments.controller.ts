import { Controller, Post, Body ,Get} from '@nestjs/common';
import { AssignmentsService } from './assignments.service';


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
}