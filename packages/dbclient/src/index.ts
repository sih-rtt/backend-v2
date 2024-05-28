import { PrismaClient } from '@prisma/client';
import { Client, RedisRepository } from './index.d';
import redis, { busRepo, busStopRepo, suggestRepo, conductorRepo, riderRepo } from './redis.js';

const prisma = new PrismaClient();

export const customClients: Client = {
  prisma,
  redis
};

export const redisRepositories: RedisRepository = {
  busRepo,
  busStopRepo,
  suggestRepo,
  conductorRepo,
  riderRepo
};
