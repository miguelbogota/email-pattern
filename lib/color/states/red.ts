import { ColorResolver } from '../resolver';
import { type OptionalColorResult } from '../result';
// import { Translation } from '../../translation';
import { type Item } from '../../item';

export class RedState implements ColorResolver {
  /** Red level */
  public level = ColorResolver.Level.red;

  /** Decrease the color level. */
  public decrease(newLevel: number, item: Item): OptionalColorResult {
    switch (newLevel) {
      // Nothing to do...
      // Default.
      default: {
        return null;
      }
    }
  }

  /** Increase the color level. */
  public increase(newLevel: number, item: Item): OptionalColorResult {
    switch (newLevel) {
      // Pending to implement...
      // Default.
      default: {
        return null;
      }
    }
  }
}
