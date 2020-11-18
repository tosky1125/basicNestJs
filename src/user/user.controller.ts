import { Body, Controller, Post, Get,UseGuards, Request, Patch } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { ChangeDto } from './dto/change.dto';
import { ParentDto } from './dto/parent.dto';
import { SitterDto } from './dto/sitter.dto';
import { ParentAdd, SitterAdd } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService : UserService){}

  @Post('parent')
  createParent(@Body() userData : ParentDto){
    return this.userService.createParent(userData);
  }
  @Post('sitter')
  createSitter(@Body() userData : SitterDto){
    return this.userService.createSitter(userData);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  findOne(@Request() req){
    return this.userService.getProfile(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('duty/parent')
  addParent(@Request() req, @Body() userData : ParentAdd){
    return this.userService.addParent(req, userData);
  }

  @UseGuards(JwtAuthGuard)
  @Post('duty/sitter')
  addSitter(@Request() req, @Body() userData : SitterAdd){
    return this.userService.addSitter(req, userData);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('info')
  changeInfo(@Request() req, @Body() userData: ChangeDto){
    return this.userService.changeInfo(req, userData);
  }
}
