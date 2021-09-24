import { Column, Entity, Index } from 'typeorm';
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
}
