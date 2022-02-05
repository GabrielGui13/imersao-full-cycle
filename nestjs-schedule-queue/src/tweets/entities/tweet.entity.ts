import { Table, Column, Model } from 'sequelize-typescript'

@Table({
    tableName: 'tweets'
})
export class Tweet extends Model { //model como modelo de classe/tabela
    @Column
    text: string;
}
