import data from '@/data/messages.json' assert { type: 'json' };

/** Union type to represent the languages available. */
type Language = keyof typeof data;

/** Union type to represent the translation keys available. */
type TranslationKey = keyof typeof data.en.email;

/**
 * Simple class to represent a translation client.
 */
export class Translation {
  constructor(private site: string) {
    this.language = this.resolveLanguage(this.site);
    this.t = this.t.bind(this);
  }

  private language: Language;

  /**
   * Simple translation function to get a translation from the data
   * file and replace the params if needed.
   */
  public t(key: TranslationKey, params?: Record<string, unknown>) {
    if (params) {
      const message = data[this.language].email[key];
      const messageWithParams = message.replace(
        /{(\w+)}/g,
        (match, key) => (params[key] || match) as string,
      );

      return messageWithParams;
    }

    return data[this.language].email[key];
  }

  /** Simple function to resolve the language based on the site. */
  private resolveLanguage(site: string): Language {
    switch (site) {
      case 'MLB':
        return 'pt';
      case 'MLM':
        return 'es';
      case 'MLA':
        return 'es';
      case 'MLC':
        return 'es';
      case 'CBT':
        return 'en';
      default:
        return 'es';
    }
  }
}
