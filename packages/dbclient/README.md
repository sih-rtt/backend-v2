# Custom Prisma Client and Redis-om Repository

This is an internal package that provides custom generated prisma client and a regular redis client to streamline client sharing for microservices in [@sih-rtt/backend](https://github.com/sih-rtt/backend).

> **Important!** : @types/node is an important dependency for this package.\
> To install this package run:
> ```npm install --save-dev @types/node```

## Installation

Install this package by running:

```bash
npm install @sih-rtt/dbclient
```

This will install Prisma Client and Redis and Redis-om along with this package.\
Hence there is no need to have prisma/prisma client/redis/redis-om pre-installed

> **Recommended** : Remove all files related to prisma and redis before installing this package

### Usage

Import the clients:

```javascript
import { customClients } from '@sih-rtt/dbclient/dist';
```

Access the clients:

```javascript
const { prisma, redis } = customClients;

// Or

const prisma = customClients.prisma;
const redis = customClients.redis;
```

Import redis repositories:

```javascript
import { redisRepositories } from '@sih-rtt/dbclient/dist';
```

Access redis repositories:

```javascript
const {
  busRepo,
  busStopRepo,
  suggestRepo,
  conductorRepo,
  riderRepo
} = redisRepositories;

// Or

const busRepo = redisRepositories.busRepo;
const busStopRepo = redisRepositories.busStopRepo;
const suggestRepo = redisRepositories.suggestRepo;
const conductorRepo = redisRepositories.conductorRepo;
const riderRepo = redisRepositories.riderRepo;

```
