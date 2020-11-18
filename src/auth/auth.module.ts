import {
  Module
} from '@nestjs/common';
import {
  JwtModule
} from '@nestjs/jwt';
import {
  PassportModule
} from '@nestjs/passport';
import {
  UserModule
} from '../user/user.module';
import {
  AuthService
} from './auth.service';
import {
  jwtConstants
} from './constant';
import { JwtStrategy } from './jwt.strategy';

import { AuthController } from './auth.controller';

@Module({
  imports: [UserModule, PassportModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions : { expiresIn : '3600s' }
  })],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}