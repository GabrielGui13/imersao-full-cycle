import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './tweets/tweets.module';
import { BullModule } from '@nestjs/bull';
import { MailingModule } from './mailing/mailing.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: 'redis', //nome do host dentro do docker, poderia ser localhost
        port: 6379 //porta padrão do redis
      }
    }),
    TweetsModule,
    SequelizeModule.forRoot({
      dialect: 'sqlite', //qual banco de dados
      host: join(__dirname, 'database.sqlite'), //connection string ou relative path (dentro do dist)
      autoLoadModels: true, //auto carregue os modelos
      synchronize: true //sincronizar as mudanças
    }),
    MailingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
