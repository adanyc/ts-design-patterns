import { User } from '../../domain/user';

export interface AuthStrategy {
  auth(user: User): Promise<string>;
}
