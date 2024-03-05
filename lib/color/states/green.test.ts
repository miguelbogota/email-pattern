import { GreenState } from '.';
import { ColorResolver } from '../resolver';
import { Item } from '@/lib/item';

describe('Color / States / Green', async () => {
  Item.SLEEP_TIME = 20;
  const item = await Item.getFromId('MLA1234567890');

  it('should return the right result (yellow)', () => {
    const greenState = new GreenState();
    const result = greenState.decrease(ColorResolver.Level.yellow, item)!;
    expect(result.emailBody).toBe(expected.yellow);
  });

  it('should return the right result (red)', () => {
    const greenState = new GreenState();
    const result = greenState.decrease(ColorResolver.Level.red, item)!;
    expect(result.emailBody).toBe(expected.red);
  });
});

// This might go out of this file.
const expected = {
  yellow:
    'Tu item {MLA1234567890} está perdiendo exposición en el sitio, si no se reduce el número de cancelaciones, devoluciones o reclamos de este ítem ya no será visible para ningún comprador en el futuro',
  red: 'Tu item {MLA1234567890} ha perdido exposición en el sitio, ya no será visible para ningún comprador.',
};
