import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AssignmentsModule } from './assignments/assignments.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/assignmentdb'),
    AssignmentsModule,
  ],
})
export class AppModule {}