import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity()
export class ParentEntity {
  @PrimaryGeneratedColumn()
  parentId: number;

  @OneToOne(() => UserEntity)
  @JoinColumn({
    name: 'primaryId',
  })
  primaryId: UserEntity;

  @Column()
  childAge: number;

  @Column()
  application: string;
}
