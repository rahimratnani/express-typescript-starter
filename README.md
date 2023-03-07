# Express TypeScript Starter

A boilerplate for building RESTful APIs using Node.js, TypeScript, Express, and Prisma.

## Getting Started

### Prerequisites

- Node version `18.0.0` or above
- A PostgreSQL database server running

### Clone the repo

```bash
$ git clone --depth 1 git@github.com:rahimratnani/express-typescript-starter.git
$ cd express-typescript-starter
$ npx rimraf ./.git
```

### Install the dependencies

```bash
$ npm install
```

### Set the environment variables

```bash
$ cp .env.example .env

# open .env and modify the environment variables
```

**Environment variables:**

- `PORT`: Your node server will run on this port. Default is 3000
- `NODE_ENV`: Default is `development`
- `DATABASE_URL`: Connection URL of PostgreSQL

### Create and seed the database

```bash
$ npx prisma migrate dev
```

This command will,

- Create a new PostgreSQL database with `User` and `Post` tables that are defined in `src/prisma/schema.prisma`
- Trigger seeding. The seed file in `src/prisma/seed.ts` will be executed and the database will be populated with the sample data.

### Start the REST API server

```bash
$ npm run dev
```
