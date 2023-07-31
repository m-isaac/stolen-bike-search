import CacheHelper from './cacheHelper';
import { Bike } from '../types';
import { API_BASE_URL, city, numberOfCasesPerPage } from '../constants';
import axios from 'axios';

class BikeSearchService {
  private cache: CacheHelper<Bike[]>;
  private cacheAge = 24;

  constructor() {
    this.cache = new CacheHelper(this.cacheAge);
  }

  async searchStolenBikes({ page, query }: { page: number; query?: string }) {
    const stolenBikesURL = `${API_BASE_URL}?page=${page}&per_page=${numberOfCasesPerPage}&location=${city}${
      query ? '&query=' + query : ''
    }`;
    if (this.cache.has(stolenBikesURL) && !this.cache.isExpired(stolenBikesURL)) return this.cache.get(stolenBikesURL)!;
    else {
      const {
        data: { bikes },
      } = await axios.get<{ bikes: Bike[] }>(stolenBikesURL);

      this.cache.set(stolenBikesURL, bikes);
      return this.cache.get(stolenBikesURL)!;
    }
  }
}

const bikeSearchService = new BikeSearchService();
export default bikeSearchService;
