## Local URL

To run the project on a local environment with a local backend server, use the following URL: [http://localhost:5000/api/v1](http://localhost:5000/api/v1)


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash

# run using watch mode
$ npm run start:dev

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Understanding relationships
- 1. One-to-One relationship with User:
- An occasion has one user.
 ```bash
$ @OneToOne(() => User, user => user.occasion)
@JoinColumn()
user: User;
```

- 2. One-to-Many relationship with Gift:
- An occasion can have multiple gifts.
 ```bash
$ @OneToMany(() => Gift, gift => gift.occasion)
gifts: Gift[];
```

- 3. Many-to-One relationship with Category:
- An occasion belongs to one category.
 ```bash
$ @ManyToOne(() => Category, category => category.occasions)
category: Category;
```

- 4. Many-to-Many relationship with Tag:
- An occasion can be associated with multiple tags through a many-to-many relationship.
 ```bash
$ @ManyToMany(() => Tag)
@JoinTable()
tags: Tag[];
```

## License

Nest is [MIT licensed](LICENSE).
