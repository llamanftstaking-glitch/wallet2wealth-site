import { NextRequest, NextResponse } from 'next/server'

function isMarkdownPreferred(request: NextRequest): boolean {
  const accept = request.headers.get('accept') ?? ''
  return accept.includes('text/markdown')
}

function unauthorized(): NextResponse {
  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="W2W Admin"' },
  })
}

function gateAdmin(request: NextRequest): NextResponse | null {
  if (!request.nextUrl.pathname.startsWith('/admin')) return null

  const user = process.env.ADMIN_USER || ''
  const pass = process.env.ADMIN_PASS || ''
  if (!user || !pass) {
    return new NextResponse('Admin credentials not configured', { status: 503 })
  }

  const header = request.headers.get('authorization') || ''
  if (!header.startsWith('Basic ')) return unauthorized()

  let decoded = ''
  try {
    decoded = atob(header.slice(6))
  } catch {
    return new NextResponse('Bad credentials', { status: 400 })
  }

  const [u, p] = decoded.split(':')
  if (u !== user || p !== pass) return unauthorized()
  return null
}

export default function proxy(request: NextRequest): NextResponse {
  const adminBlock = gateAdmin(request)
  if (adminBlock) return adminBlock

  if (isMarkdownPreferred(request)) {
    const { pathname } = request.nextUrl

    if (pathname.startsWith('/docs')) {
      const rest = pathname.slice('/docs'.length)
      const rewritten = `/llms.mdx/docs${rest}`
      return NextResponse.rewrite(new URL(rewritten, request.nextUrl))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/docs/:path*', '/admin/:path*'],
}
