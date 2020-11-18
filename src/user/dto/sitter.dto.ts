import { IntersectionType } from '@nestjs/mapped-types';
import { SitterAdd, UserDto } from './user.dto';

export class SitterDto extends IntersectionType(UserDto, SitterAdd) {}
