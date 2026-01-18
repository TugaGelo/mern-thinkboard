import {Ratelimit} from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

import dotenv from 'dotenv';
dotenv.config();

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(30, '10 s'),
  analytics: true,
})

const redis = new Redis({
  url: 'https://cuddly-mastiff-36935.upstash.io',
  token: 'AZBHAAIncDEyYmY2MzBjMTE2NWY0ZDViOWFjOWI0NDM5NGQ5ZTE4OXAxMzY5MzU',
})

await redis.set("foo", "bar");
await redis.get("foo");

export default ratelimit;