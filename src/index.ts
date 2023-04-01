import { NDKCacheAdapter, NDKEvent } from '@nostr-dev-kit/ndk';
import Redis from 'ioredis';

export default class RedisAdapter implements NDKCacheAdapter {
    public redis;

    constructor() {
        this.redis = new Redis();
    }

    public async getEvents(): Promise<Set<NDKEvent>> {
        return new Set<NDKEvent>();
    }
}