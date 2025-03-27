import { User } from '../domain/user';
import { AuthAzureHttpRepository } from '../infrastructure/auth-azure-http.repository';
import { AuthFirebaseHttpRepository } from '../infrastructure/auth-firebase-http.repository';
import { AuthContext } from './auth-context';
import { AuthAzureStrategy } from './strategies/auth-azure-strategy';
import { AuthFirebaseStrategy } from './strategies/auth-firebase-strategy';
import { AuthStrategy } from './strategies/auth-strategy';

const authMap: { [key: string]: () => AuthStrategy } = {
  azure: () => new AuthAzureStrategy(new AuthAzureHttpRepository),
  firebase: () => new AuthFirebaseStrategy(new AuthFirebaseHttpRepository),
}

export class AuthClient {
  auth(strategy: string, payload: User): Promise<string> {
    const authStrategy: AuthStrategy = authMap[strategy]();
    const authContext = new AuthContext(authStrategy);
    return authContext.auth(payload);
  }
}