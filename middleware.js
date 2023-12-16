import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { getSession } from "@/services/authentication/cookie-session.js";

export async function middleware(request) {
    const user = await getSession();

    if (!user) {
        const redirectURL = new URL('/login', request.url);
        return NextResponse.redirect(redirectURL);
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/areaTreinamento:path*', 
              '/chat_aurora/:path*', 
              '/modulos/:path*', 
              '/perfil/:path*', 
              '/redacao/:path*'],
};
