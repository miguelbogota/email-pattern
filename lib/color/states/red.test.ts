import { RedState } from '.';
import { ColorResolver } from '../resolver';
import { Item } from '@/lib/item';

describe('Color / States / Red', async () => {
  Item.SLEEP_TIME = 20;
  const item = await Item.getFromId('MLA1234567890');

  it('should return the right result (green)', () => {
    const state = new RedState();
    const result = state.decrease(ColorResolver.Level.green, item);
    expect(result).toBe(expected.green);
  });

  it('should return the right result (yellow)', () => {
    const state = new RedState();
    const result = state.decrease(ColorResolver.Level.yellow, item);
    expect(result).toBe(expected.yellow);
  });
});

// This might go out of this file.
const expected = {
  yellow: null,
  green: null,
};
