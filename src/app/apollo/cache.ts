import { InMemoryCache } from 'apollo-cache-inmemory';

export const createCache = () => new InMemoryCache();