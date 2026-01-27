import { NextRequest, NextResponse } from 'next/server';
import { casinoRealUrls, affiliateLinks } from '@/data/affiliate-links';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const realUrl = casinoRealUrls[slug];
  if (!realUrl) {
    return NextResponse.redirect(new URL('/', request.url), 302);
  }

  const isBot = request.headers.get('x-is-googlebot') === 'true';
  const affiliateUrl = affiliateLinks[slug];

  // Bots always get the real URL; users get the affiliate link (or real URL as fallback)
  const destination = isBot ? realUrl : affiliateUrl || realUrl;

  return NextResponse.redirect(destination, {
    status: 302,
    headers: {
      'X-Robots-Tag': 'noindex, nofollow',
      Vary: 'x-is-googlebot',
    },
  });
}
