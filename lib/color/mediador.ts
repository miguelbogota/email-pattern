import { ColorResolver } from './resolver';
import { type OptionalColorResult } from './result';
import { type Item } from '../item';

/**
 * Mediator class to change the color level.
 */
export class ColorMediator {
  constructor(private item: Item) {}

  /**
   * Change the color level and returns the result to send in the email.
   */
  public changeColor(fromColor: ColorResolver, toColor: ColorResolver): OptionalColorResult {
    // Increase the color level.
    if (fromColor.level < toColor.level) {
      return fromColor.increase(toColor.level, this.item);
    }

    // Decrease the color level.
    if (fromColor.level > toColor.level) {
      return fromColor.decrease(toColor.level, this.item);
    }

    // Same color level, nothing to do...
    return null;
  }
}
