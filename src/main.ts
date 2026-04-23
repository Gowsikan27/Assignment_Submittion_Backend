import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    const port = process.env.PORT || 5000;
    await app.listen(port);
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${port}`);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}
bootstrap();
