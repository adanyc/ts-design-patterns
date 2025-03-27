import { User } from './user';

export interface AuthRepository {
  auth(user: User): Promise<string>;
}
