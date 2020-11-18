import {
  Injectable, UnauthorizedException
} from '@nestjs/common';
import {
  UserService
} from '../user/user.service';
import {
  JwtService
} from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService
  ) {}

  async login(userData: any) {
    const user = await this.userService.findOne(userData.userId);
    if (user && await user.comparePassword(userData.password)) {
      const {
        password,
        ...result
      } = user;
      return {
        access_token: this.jwtService.sign(result),
      };
    } else { 
      throw new UnauthorizedException();
    }
  }
};