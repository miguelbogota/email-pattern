import { ColorResolver } from '../resolver';
import { ColorResult, type OptionalColorResult } from '../result';
import { Translation } from '../../translation';
import { type Item } from '../../item';

export class YellowState implements ColorResolver {
  /** Yellow level */
  public level = ColorResolver.Level.yellow;

  /** Decrease the color level. */
  public decrease(newLevel: number, item: Item): OptionalColorResult {
    const { itemId, sellerId, site } = item;
    const { t } = new Translation(site);

    switch (newLevel) {
      // Red.
      case ColorResolver.Level.red: {
        const message = t('lost_exposition_warned', { itemId });
        return new ColorResult(sellerId, message);
      }

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
