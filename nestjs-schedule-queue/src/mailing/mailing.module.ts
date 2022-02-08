import { Module } from '@nestjs/common';
import { SendMailWithTweetsJob } from './send-mail-with-tweets.job';

@Module({
    providers: [SendMailWithTweetsJob]
})
export class MailingModule {}

// optar por pequenas tarefas
// tarefa que verifica novos tweets (cron job)
// gera uma fila de processamento
// bulljs usando redis para guardar novas requisições de processamento de uma fila
// redis é um pequeno banco de dados