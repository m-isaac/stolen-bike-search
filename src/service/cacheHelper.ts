class CacheHelper<T> {
  private cache: Map<string, [T, number]>;
  private cacheValidityHours: number;

  constructor(cacheValidityHours: number) {
    this.cacheValidityHours = cacheValidityHours;
    this.cache = new Map();
  }

  has(key: string) {
    return this.cache.has(key);
  }

  set(key: string, value: T) {
    return this.cache.set(key, [value, Date.now()]);
  }

  get(key: string) {
    return this.cache.get(key)?.[0];
  }

  isExpired(key: string) {
    const timestamp = this.cache.get(key)?.[1];
    if (timestamp === undefined) return true;

    return (Date.now() - timestamp) / (1000 * 60 * 60) > this.cacheValidityHours;
  }
}

export default CacheHelper;
