import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigurationService } from "./configurations/enviroment.configuration";
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(new ConfigurationService().get("PORT"));
}
bootstrap();
