import { PrismaClient } from '@prisma/client';
import { RedisClientType } from 'redis';
import { Repository } from 'redis-om/dist/index.d';

export * from '.prisma/client/index.d';
export * from 'redis/dist/index.d';
export * from 'redis-om/dist/index.d';

export const customClients: Client;
export const redisRepositories: RedisRepository;

export interface Client {
  prisma: PrismaClient;
  redis: RedisClientType
}

export interface RedisRepository { 
  busRepo: Repository, 
  busStopRepo: Repository,
  suggestRepo: Repository,
  conductorRepo: Repository,
  riderRepo: Repository 
}
