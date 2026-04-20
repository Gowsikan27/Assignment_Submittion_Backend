import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AssignmentsService {
  constructor(
    @InjectModel('Assignment') private assignmentModel: Model<any>
  ) {}

  async create(data: any) {
    return new this.assignmentModel(data).save();
  }

  
}