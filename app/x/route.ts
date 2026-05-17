import { shortRedirect } from '@/lib/shortlink'

export const runtime = 'edge'

export function GET(req: Request) {
  return shortRedirect('x', req)
}
