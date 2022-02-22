import { Entity, Column, BeforeInsert } from "typeorm";
import { BaseEntity } from "../../generic/BaseEntity";
import * as bcrypt from 'bcrypt';
@Entity('User')
export class UserEntity extends BaseEntity {

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @Column({ unique: true })
    public email: string;

    @Column()
    password: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 6);
    }

    async validatePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }

}

