import { RedisClientType, createClient } from 'redis';
import { Repository, Schema } from 'redis-om';

const redis: RedisClientType = createClient();
redis.on('error', () => {
  throw new Error("Redis Client Error.");
});

await redis.connect(); 

const busStop: Schema = new Schema('BusStop', {
  id: { type: 'string' },
  refId: { type: 'number' },
  location: { type: 'point' },
  name: { type: 'string' }
});

const bus: Schema = new Schema('Bus', {
  id: { type: 'string' },
  regNo: { type: 'string' },
  busNo: { type: 'string' },
  location: { type: 'point' },
  type: { type: 'string' },
  info: { type: 'text' },
  routeA: { type: 'number[]' },
  routeB: { type: 'number[]' }
});

const suggest: Schema = new Schema('Suggest', {
  suggestTerm: { type: 'text' },
  type: { type: 'string' },
  refId: { type: 'string' }
});

const user: Schema = new Schema('User', {
  email: { type: 'string' },
  accessTokens: { type: 'string[]' },
  refreshTokens: { type: 'string[]' },
});

const conductor: Schema = new Schema('Concductor', {
  conductorid: { type: 'string' },
  loggedIn: { type: 'boolean' },
  access: { type: 'string' },
  refresh: { type: 'string' },
});

export const riderRepo: Repository = new Repository(user, redis);
export const conductorRepo: Repository = new Repository(conductor, redis);
export const busStopRepo: Repository = new Repository(busStop, redis);
export const busRepo: Repository = new Repository(bus, redis);
export const suggestRepo: Repository = new Repository(suggest, redis);
export default redis;

await busStopRepo.createIndex();
await busRepo.createIndex();
await suggestRepo.createIndex();
