import { describe, expect, it } from 'vitest';

import { sum, increment } from '../index';

describe('core test', () => {
    it('should sum', () => {
        expect(sum(1, 2)).toEqual(3);
    });

    it('should increment', () => {
        expect(increment(1)).toEqual(2);
    });
});
