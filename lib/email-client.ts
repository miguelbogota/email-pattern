/**
 * Simple class to represent an email client.
 */
export class EmailClient {
  /**
   * Send an email to the seller.
   */
  async send(sellerId: string, body: string): Promise<void> {
    console.log(`==========================================`);
    console.log(`|             Email Sent!                |`);
    console.log(`|----------------------------------------|`);
    console.log(`| To: ${sellerId}                              |`);
    console.log(`|                                        |`);
    console.log(`| Body:                                  |`);

    const maxLineLength = 38; // Adjust the maximum line length as needed
    const words = body.split(/\s+/);
    let currentLine = '';

    words.forEach((word) => {
      if ((currentLine + word).length <= maxLineLength) {
        currentLine += `${word} `;
      } else {
        console.log(`| ${currentLine.trim().padEnd(maxLineLength)} |`);
        currentLine = `${word} `;
      }
    });

    if (currentLine.trim()) {
      console.log(`| ${currentLine.trim().padEnd(maxLineLength)} |`);
    }

    console.log(`|                                        |`);
    console.log(`==========================================`);
    console.log(``);
    console.log(``);
  }
}
