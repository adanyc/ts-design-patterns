import { User } from '../domain/user';
import { AuthStrategy } from './strategies/auth-strategy';

export class AuthContext {
  private authStrategy: AuthStrategy;

  constructor(authStrategy: AuthStrategy) {
    this.authStrategy = authStrategy;
  }

  setStrategy(authStrategy: AuthStrategy) {
    this.authStrategy = authStrategy;
  }

  auth(user: User): Promise<string> {
    return this.authStrategy.auth(user);
  };
}
