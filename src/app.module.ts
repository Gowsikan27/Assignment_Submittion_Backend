import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AssignmentsModule } from './assignments/assignments.module';


const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URL || process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error('MongoDB connection string is missing! Please set MONGODB_URI or MONGO_URL in your environment variables.');
}
// eslint-disable-next-line no-console
console.log('MongoDB URI loaded:', mongoUri.split('@')[1] ? 'mongodb://***:***@' + mongoUri.split('@')[1] : mongoUri);

@Module({
  imports: [
    MongooseModule.forRoot(mongoUri),
    AssignmentsModule,
  ],
})
export class AppModule {}