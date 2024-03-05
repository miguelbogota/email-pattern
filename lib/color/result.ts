export type OptionalColorResult = ColorResult | null;

/**
 * Simple class to represent the color result.
 */
export class ColorResult {
  constructor(
    public readonly sellerId: string,
    public readonly emailBody: string,
  ) {}
}
