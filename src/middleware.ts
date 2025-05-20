import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match only the following protected routes:
     * - /dashboard (including subpaths)
     * - /chat (including subpaths)
     * - /summary (including subpaths)
     * - /api (including subpaths)
     */
    '/dashboard/:path*',
    '/chat/:path*',
    '/summary/:path*',
    '/api/:path*',
  ],
}