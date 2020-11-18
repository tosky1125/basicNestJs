import {
  IsString,
  IsNumber,
  IsEmail,
  MinLength,
  Matches,
} from 'class-validator';
export class UserDto {
  @IsString()
  readonly userName: string;

  @IsNumber()
  readonly dateOfBirth: number;

  @IsString()
  readonly gender: string;

  @IsString()
  readonly userId: string;

  @IsString()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password will contain at least 1 symbol, 1 Capital letter.',
  })
  password: string;

  @IsEmail()
  readonly email: string;
}

export class ParentAdd {
  @IsNumber()
  readonly childAge: number;
  @IsString()
  readonly application: string;
}

export class SitterAdd {
  @IsNumber()
  readonly careableAge: number;

  @IsString()
  readonly introduction: string;
}
