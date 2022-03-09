import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigurationService } from "./configurations/enviroment.configuration";
/*
import * as session from 'express-session';
import flash = require('connect-flash');
import * as passport from 'passport';
*/
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(new ConfigurationService().get("PORT"));
/*
  app.use(
    session({
      secret: 'nest cats',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
*/
}
bootstrap();
