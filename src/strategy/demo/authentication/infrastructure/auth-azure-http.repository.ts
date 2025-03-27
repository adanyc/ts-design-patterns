import { AuthRepository } from '../domain/auth-repository';
import { User } from '../domain/user';

export class AuthAzureHttpRepository implements AuthRepository {
  auth(user: User): Promise<string> {
    return new Promise<string>(resolve => {
      resolve(`[AZURE]: ${user.email} authenticated with password ${user.password}`);
    });
  }
}
