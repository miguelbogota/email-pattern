import { ColorResolver } from '../resolver';
import { ColorResult, type OptionalColorResult } from '../result';
import { Translation } from '../../translation';
import { type Item } from '../../item';

export class GreenState implements ColorResolver {
  /** Green level */
  public level = ColorResolver.Level.green;

  /** Decrease the color level. */
  public decrease(newLevel: number, item: Item): OptionalColorResult {
    const { itemId, sellerId, site } = item;
    const { t } = new Translation(site);

    switch (newLevel) {
      // Red.
      case ColorResolver.Level.red: {
        const message = t('lost_exposition', { itemId });
        return new ColorResult(sellerId, message);
      }

      // Yellow.
      case ColorResolver.Level.yellow: {
        const message = t('losing_exposition', { itemId });
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
      // Nothing to do...
      // Default.
      default: {
        return null;
      }
    }
  }
}
