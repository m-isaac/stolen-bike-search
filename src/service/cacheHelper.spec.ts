import CacheHelper from './cacheHelper';
describe('cache helper', () => {
  beforeEach(() => jest.resetAllMocks());

  it('correctly stores values at the specified keys', () => {
    const cache = new CacheHelper(1);
    const key = 'some random key';
    const value = Math.random();
    cache.set(key, value);
    expect(cache.has(key)).toBe(true);
  });

  it('correctly retrieves values', () => {
    const cache = new CacheHelper(1);
    const key = 'some random key';
    const value = Math.random();
    cache.set(key, value);
    expect(cache.get(key)).toBe(value);
  });

  it('correctly expires cache after the specified time', () => {
    jest.useFakeTimers().setSystemTime(0);
    const cacheValidityHours = 1;
    const cache = new CacheHelper(cacheValidityHours);
    const key = 'some random key';
    const value = Math.random();
    cache.set(key, value);
    expect(cache.isExpired(key)).toBe(false);
    jest.useFakeTimers().setSystemTime(cacheValidityHours * 60 * 60 * 1000 + 1);
    expect(cache.isExpired(key)).toBe(true);
  });
});
