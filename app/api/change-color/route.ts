import { type NextRequest } from 'next/server';

import { EmailClient } from '@/lib/email-client';
import { ColorMediator, ColorResolver } from '@/lib/color';
import { Item } from '@/lib/item';

type Body = {
  currentColor: string;
  nextColor: string;
  itemId: string;
};

export async function POST(request: NextRequest) {
  const res = (await request.json()) as Body;

  const emailClient = new EmailClient();

  const currentColor = ColorResolver.colorResolver(res.currentColor);
  const nextColor = ColorResolver.colorResolver(res.nextColor);

  const item = await Item.getFromId(res.itemId);

  const mediator = new ColorMediator(item);
  const result = mediator.changeColor(currentColor, nextColor);

  if (result) {
    await emailClient.send(`${item.site}${item.sellerId}`, result.emailBody);

    return Response.json({
      title: `[${item.site}${item.sellerId}]: Se envió el email`,
      content: result.emailBody,
    });
  }

  return Response.json({
    title: `[${item.site}${item.sellerId}]: No se envió el email`,
    content: `No se cambio el color de ${res.itemId}`,
  });
}
