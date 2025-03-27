import { AuthRepository } from '../../domain/auth-repository';
import { User } from '../../domain/user';
import { AuthStrategy } from './auth-strategy';

export class AuthAzureStrategy implements AuthStrategy {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  auth(user: User): Promise<string> {
    return this.authRepository.auth(user);
  }
}