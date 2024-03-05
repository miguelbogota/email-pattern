import { GreenState, RedState, YellowState } from './states';
import { OptionalColorResult } from './result';
import { Item } from '../item';

/** Type to represent the color level. */
type Level = (typeof ColorResolver.Level)[keyof typeof ColorResolver.Level];

/**
 * Color interface to implemente the color states.
 */
export class ColorResolver {
  public level!: Level;
  public decrease!: (newLevel: number, item: Item) => OptionalColorResult;
  public increase!: (newLevel: number, item: Item) => OptionalColorResult;

  /** Simple function to resolve the color class based on the string color. */
  public static colorResolver(color: string): ColorResolver {
    switch (color) {
      case 'green':
        return new GreenState();
      case 'yellow':
        return new YellowState();
      case 'red':
        return new RedState();
      default:
        throw new Error('Invalid color');
    }
  }

  /** Enum to represent the colors available. */
  public static Level = Object.freeze({
    green: 600,
    yellow: 300,
    red: 100,
  });
}
