import { AuthRepository } from '../domain/auth-repository';
import { User } from '../domain/user';

export class AuthFirebaseHttpRepository implements AuthRepository {
  auth(user: User): Promise<string> {
    return new Promise<string>(resolve => {
      resolve(`[FIREBASE]: ${user.email} authenticated with password ${user.password}`);
    });
  }
}