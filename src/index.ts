import { PrismaClient } from '@prisma/client';
import redis from './redis';
import { Client, RedisRepository } from './index.d';
import { busRepo, busStopRepo, suggestRepo, conductorRepo, riderRepo } from './redis';

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
