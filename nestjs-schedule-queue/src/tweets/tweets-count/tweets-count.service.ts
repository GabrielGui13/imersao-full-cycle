import { InjectQueue } from '@nestjs/bull';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/sequelize';
import { Queue } from 'bull';
import { Cache } from 'cache-manager';
import { Tweet } from '../entities/tweet.entity';

@Injectable()
export class TweetsCountService {
    private limit = 10;

    constructor(
        @InjectModel(Tweet)
        private tweetModel: typeof Tweet,
        @Inject(CACHE_MANAGER)
        private cacheManager: Cache,
        @InjectQueue('emails')
        private emailsQueue: Queue
    ) {}
    
    @Interval(5000) // de 5 em 5 segundos essa função é chamada automaticamente enquanto a aplicação estiver rodando
    async countTweets() { //cron job funcionando por baixo dos panos
        //console.log('executou')
        console.log('procurando tweets')
        let offset = await this.cacheManager.get<number>('tweet-offset')
        offset === undefined ? 0 : offset;

        console.log(`offsets: ${offset}`)

        const tweets = await this.tweetModel.findAll({
            offset, //inicia do 0
            limit: this.limit //até 10 tweets
        })

        console.log(`${tweets.length} encontrados`)

        if (tweets.length === this.limit) {
            this.cacheManager.set('tweet-offset', offset = this.limit, {
                ttl: 1 * 60 * 10 //time to leave
            })
            console.log(`achou + ${this.limit} tweets`)
            this.emailsQueue.add({
                tweets: tweets.map(t => t.toJSON())
            })
        }
    }
}

//filas = criar tarefas a serem executadas na sequência