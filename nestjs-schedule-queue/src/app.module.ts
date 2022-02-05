import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TweetsModule,
    SequelizeModule.forRoot({
      dialect: 'sqlite', //qual banco de dados
      host: join(__dirname, 'database.sqlite'), //connection string ou relative path (dentro do dist)
      autoLoadModels: true, //auto carregue os modelos
      synchronize: true //sincronizar as mudanças
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
