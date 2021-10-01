import { Column, Entity, JoinColumn, ManyToOne, RelationId } from 'typeorm';
import { Common } from './Common';
import { User } from './User';

@Entity()
export class Board extends Common {
    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    hit: number;

    @ManyToOne(type => User, user => user.boards)
    user: User;

    @RelationId((board: Board) => board.user)
    userId: string;
}
