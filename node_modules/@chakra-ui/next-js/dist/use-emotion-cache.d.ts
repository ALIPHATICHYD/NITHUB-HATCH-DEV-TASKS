import * as _emotion_cache from '@emotion/cache';
import { Options } from '@emotion/cache';

type EmotionCacheOptions = Partial<Options>;
declare function useEmotionCache(options?: EmotionCacheOptions): _emotion_cache.EmotionCache;

export { EmotionCacheOptions, useEmotionCache };
