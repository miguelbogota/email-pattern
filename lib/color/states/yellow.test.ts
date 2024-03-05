import { YellowState } from '.';
import { ColorResolver } from '../resolver';
import { Item } from '@/lib/item';

describe('Color / States / Yellow', async () => {
  Item.SLEEP_TIME = 20;
  const item = await Item.getFromId('MLA1234567890');

  it('should return the right result (green)', () => {
    const state = new YellowState();
    const result = state.decrease(ColorResolver.Level.green, item);
    expect(result).toBe(expected.green);
  });

  it('should return the right result (red)', () => {
    const state = new YellowState();
    const result = state.decrease(ColorResolver.Level.red, item)!;
    expect(result.emailBody).toBe(expected.red);
  });
});

// This might go out of this file.
const expected = {
  green: null,
  red: 'Tu item que traía problemas {MLA1234567890} ha perdido exposición en el sitio definitivamente y ya no será visible para ningún comprador.',
};
