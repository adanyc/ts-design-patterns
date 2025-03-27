import { AuthClient } from './application/auth-client';
import { User } from './domain/user';

// Playground
const authClient = new AuthClient();
const user = new User('', '', '', 'alex@gmail.com', '123456');
authClient.auth('firebase', user).then(console.log);
