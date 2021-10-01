import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Board } from './Board';
import { Common } from './Common';

@Entity()
export class User extends Common {
    @Index({ unique: true })
    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    nickname: string;

    @OneToMany(type => Board, board => board.user)
    boards: Board[];
}
