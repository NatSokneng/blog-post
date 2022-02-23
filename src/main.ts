import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigurationService } from "./configurations/enviroment.configuration";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(new ConfigurationService().get("PORT"));
}
bootstrap();
