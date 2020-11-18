import {
  ConflictException,
  Injectable,
  NotAcceptableException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { ParentDto } from './dto/parent.dto';
import { SitterDto } from './dto/sitter.dto';
import { ParentAdd, SitterAdd, UserDto } from './dto/user.dto';
import { ParentEntity } from './entities/parent.entity';
import { SitterEntity } from './entities/sitter.entity';
import { ChangeDto } from './dto/change.dto';
import { Info } from './interface/info.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(ParentEntity)
    private readonly parentRepository: Repository<ParentEntity>,
    @InjectRepository(SitterEntity)
    private readonly sitterRepository: Repository<SitterEntity>,
  ) {}

  async createUser(userData: UserDto) {
    let user = Object.assign(new UserEntity(), userData);
    user = this.userRepository.create(userData);
    await this.userRepository.save(user);
    return user;
  }

  async createParent(userData: ParentDto) {
    let parent = new ParentEntity();
    const { childAge, application, ...result } = userData;
    try {
      const user = await this.createUser(result);
      parent.childAge = childAge;
      parent.application = application;
      parent.primaryId = user;
      parent = await this.parentRepository.save(parent);
      await this.userRepository.update(
        { primaryId: user.primaryId },
        { parent: parent },
      );
    } catch (error) {
      throw new ConflictException();
    }
    return userData;
  }

  async createSitter(userData: SitterDto) {
    let sitter = new SitterEntity();
    const { careableAge, introduction, ...result } = userData;
    try {
      const user = await this.createUser(result);
      sitter.careableAge = careableAge;
      sitter.introduction = introduction;
      sitter.primaryId = user;
      sitter = await this.sitterRepository.save(sitter);
      await this.userRepository.update(
        { primaryId: user.primaryId },
        { sitter },
      );
    } catch (error) {
      throw new ConflictException();
    }
    return userData;
  }

  async addParent(req, userData: ParentAdd) {
    const { user } = req;
    const { childAge, application } = userData;
    const isExist = await this.parentRepository.findOne({
      where: { primaryId: user.primaryId },
    });
    if (isExist) {
      throw new NotAcceptableException();
    }
    let parent = new ParentEntity();
    parent.primaryId = user;
    parent.childAge = childAge;
    parent.application = application;
    parent = await this.parentRepository.save(parent);
    await this.userRepository.update({ primaryId: user.primaryId }, { parent });
    return this.userRepository.find({ primaryId: user.primaryId });
  }

  async addSitter(req, userData: SitterAdd) {
    const { user } = req;
    const { careableAge, introduction } = userData;

    const isExist = await this.sitterRepository.findOne({
      where: { primaryId: user.primaryId },
    });
    if (isExist) {
      throw new NotAcceptableException();
    }
    let sitter = new SitterEntity();
    sitter.primaryId = user;
    sitter.careableAge = careableAge;
    sitter.introduction = introduction;
    sitter = await this.sitterRepository.save(sitter);
    await this.userRepository.update({ primaryId: user.primaryId }, { sitter });
    return this.userRepository.find({ primaryId: user.primaryId });
  }

  async changeInfo(req, userData: ChangeDto): Promise<Info> {
    const { user } = req;
    // try {
    let newUser = Object.assign(new UserEntity(), { ...user, ...userData });
    newUser = this.userRepository.create(newUser);
    await this.userRepository.save(newUser);
    if ((userData.childAge || userData.application) && user.parent) {
      const { parent } = user;
      let { childAge, application } = userData;
      application = application ? application : parent.application;
      childAge = childAge ? childAge : parent.childAge;
      const updateParent = { ...parent, childAge, application };
      await this.parentRepository.update(
        { primaryId: user.primaryId },
        { ...updateParent },
      );
    }
    if ((userData.careableAge || userData.introduction) && user.sitter) {
      const { sitter } = user;
      let { careableAge, introduction } = userData;
      introduction = introduction ? introduction : sitter.introduction;
      careableAge = careableAge ? careableAge : sitter.careableAge;
      const updateSitter = { ...sitter, careableAge, introduction };
      await this.sitterRepository.update(
        { primaryId: user.primaryId },
        { ...updateSitter },
      );
    }
    newUser = await this.getProfile(user.userId);
    return newUser;
    // } catch (error) {
    throw new NotAcceptableException();
    // }
  }
  async getProfile(userId: string): Promise<Info> {
    const { password, ...result } = await this.findOne(userId);
    return result;
  }

  async findOne(userId: string): Promise<UserEntity | undefined> {
    const findUser = await this.userRepository.findOne({
      where: { userId },
      relations: ['parent', 'sitter'],
    });
    return findUser;
  }
}
