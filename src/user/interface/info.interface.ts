import { ParentEntity } from '../entities/parent.entity';
import { SitterEntity } from '../entities/sitter.entity';

export interface Info {
  primaryId: number;
  userName: string;
  dateOfBirth: number;
  gender: string;
  userId: string;
  email: string;
  parent: ParentEntity;
  sitter: SitterEntity;
}
