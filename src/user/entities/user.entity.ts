import { AfterLoad, BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ParentEntity } from "./parent.entity";
import { SitterEntity } from "./sitter.entity";
import * as bcrypt from 'bcrypt';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  primaryId : number;

  @Column()
  password : string;

  @Column()
  userName : string;

  @Column()
  dateOfBirth : number;

  @Column()
  gender : string;

  @Column({unique : true})
  userId : string;

  @Column()
  email : string;

  @OneToOne(() => ParentEntity)
  @JoinColumn({
    name: 'parentId'
  })
  parent: ParentEntity;

  @OneToOne(() => SitterEntity)
  @JoinColumn({
    name: 'sitterId'
  })
  sitter: SitterEntity;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  comparePassword (password) {
    return bcrypt.compare(password, this.password);
  }
}