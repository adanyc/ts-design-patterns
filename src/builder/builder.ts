class Person {
  private name: string;
  private lastName: string;
  private age: number;
  private city: string;
  private country: string;
  private hobbies: string[];

  constructor(
    name: string,
    lastName: string,
    age: number,
    city: string,
    country: string,
    hobbies: string[]
  ) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
    this.country = country;
    this.hobbies = hobbies;
  }
}

interface PersonBuilder {
  name: string;
  lastName: string;
  age: number;
  city: string;
  country: string;
  hobbies: string[];

  setName(name: string): PersonBuilder;
  setLastName(lastName: string): PersonBuilder;
  setAge(age: number): PersonBuilder;
  setCity(city: string): PersonBuilder;
  setCountry(country: string): PersonBuilder;
  addHobby(hobby: string): PersonBuilder;
  build(): Person;
}

class PersonBuilderImpl implements PersonBuilder {
  name: string;
  lastName: string;
  age: number;
  city: string;
  country: string;
  hobbies: string[];

  constructor() {
    this.name = '';
    this.lastName = '';
    this.age = 0;
    this.city = '';
    this.country = '';
    this.hobbies = [];
  }

  reset(): void {
    this.name = '';
    this.lastName = '';
    this.age = 0;
    this.city = '';
    this.country = '';
    this.hobbies = [];
  }

  setName(name: string): PersonBuilder {
    this.name = name;
    return this;
  }

  setLastName(lastName: string): PersonBuilder {
    this.lastName = lastName;
    return this;
  }

  setAge(age: number): PersonBuilder {
    this.age = age;
    return this;
  }

  setCity(city: string): PersonBuilder {
    this.city = city;
    return this;
  }

  setCountry(country: string): PersonBuilder {
    this.country = country;
    return this;
  }

  addHobby(hobby: string): PersonBuilder {
    this.hobbies.push(hobby);
    return this;
  }

  build(): Person {
    const person = new Person(
      this.name,
      this.lastName,
      this.age,
      this.city,
      this.country,
      this.hobbies
    );
    this.reset();
    return person;
  }
}

class PersonDirector {
  private personBuilder: PersonBuilder;

  constructor(personBuilder: PersonBuilder) {
    this.personBuilder = personBuilder;
  }

  setPersonBuilder(personBuilder: PersonBuilder): void {
    this.personBuilder = personBuilder;
  }

  createSimplePerson(name: string, lastName: string): void {
    this.personBuilder
      .setName(name)
      .setLastName(lastName);
  }
}

// playground
const personBuilderImpl = new PersonBuilderImpl();
const alex = personBuilderImpl
  .setName('Alex')
  .setLastName('Smith')
  .addHobby('Reading')
  .addHobby('Playing Video Games')
  .build();
console.log(alex);

const marjorie = personBuilderImpl
  .setName('Marjorie')
  .setLastName('Doe')
  .setAge(37)
  .setCity('New York')
  .setCountry('USA')
  .addHobby('Riding Bike')
  .addHobby('Going to shopping')
  .build();
console.log(marjorie);

// creacion con director
const director = new PersonDirector(personBuilderImpl);
director.createSimplePerson('John', 'Crats');
const johnCrats = personBuilderImpl.build();
console.log(johnCrats);