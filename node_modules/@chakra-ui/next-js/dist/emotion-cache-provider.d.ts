import { PropsWithChildren } from 'react';
import { EmotionCacheOptions } from './use-emotion-cache.js';
import '@emotion/cache';

type CacheProviderProps = PropsWithChildren<EmotionCacheOptions>;
declare function CacheProvider({ children, ...cacheOptions }: CacheProviderProps): JSX.Element;

export { CacheProvider, CacheProviderProps };
