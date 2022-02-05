import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/sequelize';
import { Tweet } from '../entities/tweet.entity';

@Injectable()
export class TweetsCountService {
    constructor(
        @InjectModel(Tweet)
        private tweetModel: typeof Tweet
    ) {}
    
    @Interval(5000) // de 5 em 5 segundos essa função é chamada automaticamente enquanto a aplicação estiver rodando
    async countTweets() { //cron job funcionando por baixo dos panos
        //console.log('executou')
        const tweets = await this.tweetModel.findAll({
            offset: 0, //inicia do 0
            limit: 10 //até 10 tweets
        })
    }
}
