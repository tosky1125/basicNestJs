import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { ParentEntity } from './entities/parent.entity';
import { SitterEntity } from './entities/sitter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, ParentEntity, SitterEntity])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
s