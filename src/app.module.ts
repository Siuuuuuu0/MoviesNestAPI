import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { DatabaseModule } from './database/database.module';
import { DirectorModule } from './director/director.module';
import { ActorsModule } from './actors/actors.module';

@Module({
  imports: [MoviesModule, DatabaseModule, DirectorModule, ActorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
