export class User {
  constructor(
    public readonly userName: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly email: string,
    public readonly password: string,
  ) { }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}