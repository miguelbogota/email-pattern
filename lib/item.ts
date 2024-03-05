import data from '@/data/sellers.json' assert { type: 'json' };

/**
 * Simple class to represent an item.
 */
export class Item {
  constructor(
    public readonly sellerId: string,
    public readonly itemId: string,
    public readonly site: string,
  ) {}

  /** Sleep time to simulate a database call. */
  public static SLEEP_TIME = 1000;

  static async getFromId(itemId: string): Promise<Item> {
    // Fetch item from database...
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        const seller = data.find((s) => !!s.items.find((i) => i.id === itemId));

        if (!seller) {
          reject(new Error('Item not found'));
          return;
        }

        resolve(new Item(seller.id, itemId, seller.site));
      }, this.SLEEP_TIME),
    );
  }
}
