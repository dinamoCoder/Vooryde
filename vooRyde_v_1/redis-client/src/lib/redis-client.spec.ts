import { redisClient } from './redis-client.js';

describe('redisClient', () => {
  it('should work', () => {
    expect(redisClient()).toEqual('redis-client');
  });
});
