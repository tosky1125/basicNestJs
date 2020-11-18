import { IsString, IsNumber, IsEmail, MinLength, Matches, IsOptional } from 'class-validator';
export class ChangeDto {
  @IsString()
  @IsOptional()
  readonly userName : string;

  @IsNumber()
  @IsOptional()
  readonly dateOfBirth : number;

  @IsString()
  @IsOptional()
  readonly gender : string;

  @IsString()
  @IsOptional()
  readonly userId : string;

  @IsOptional()
  @IsString()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'Password will contain at least 1 symbol, 1 Capital letter.'})
  password : string;

  @IsEmail()
  @IsOptional()
  readonly email : string;

  @IsNumber()
  @IsOptional()
  readonly childAge : number;

  @IsString()
  @IsOptional()
  readonly application : string;

  @IsOptional()
  @IsNumber()
  readonly careableAge : number;
  
  @IsOptional()
  @IsString()
  readonly introduction : string;
}
