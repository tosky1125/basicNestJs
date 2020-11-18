import {
  UserDto,
  ParentAdd
} from "./user.dto";
import {
  IntersectionType
} from '@nestjs/mapped-types';

export class ParentDto extends IntersectionType(UserDto, ParentAdd) {};