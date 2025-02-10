interface Strategy {
  login(user: string, password: string): boolean;
}

class LoginContext {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  authenticate(user: string, password: string): boolean {
    return this.strategy.login(user, password);
  }
}

class LoginDBStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log('waiting for database authentication...');
    if (user === 'admin' && password === '123456') {
      return true;
    }
    return false;
  }
}

class LoginServiceStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log('waiting for service authentication...');
    if (user === 'admin' && password === '123456') {
      return true;
    }
    return false;
  }
}

// Playground
const auth = new LoginContext(new LoginDBStrategy());

const resultLoginDB = auth.authenticate('admin', '123456');
console.log('resultLoginDB:', resultLoginDB);

auth.setStrategy(new LoginServiceStrategy());

const resultLoginService = auth.authenticate('admin', '123456');
console.log('resultLoginService:', resultLoginService);