import { NextRequest, NextResponse } from 'next/server';

const BOT_USER_AGENTS = [
  'googlebot',
  'bingbot',
  'yandex',
  'baiduspider',
  'duckduckbot',
  'slurp',
  'ia_archiver',
];

export function middleware(request: NextRequest) {
  const ua = request.headers.get('user-agent')?.toLowerCase() ?? '';
  const isBot = BOT_USER_AGENTS.some((bot) => ua.includes(bot));

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-is-googlebot', isBot ? 'true' : 'false');

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: '/go/:path*',
};
