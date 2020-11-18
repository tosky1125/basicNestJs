import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import {
  UserEntity
} from "./user.entity";

@Entity()
export class SitterEntity {
  @PrimaryGeneratedColumn()
  sitterId: number;

  @OneToOne(() => UserEntity)
  @JoinColumn({
    name: 'primaryId'
  })
  primaryId: UserEntity;

  @Column()
  careableAge: number;

  @Column()
  introduction: string;
}