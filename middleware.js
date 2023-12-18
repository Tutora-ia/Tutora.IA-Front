import { NextResponse, NextRequest } from 'next/server'
import { getSession } from "@/services/authentication/cookie-session.js";

export async function middleware(request) {
    const user = await getSession();

    const protectedPaths = ['/modulos', '/areaTreinamento', '/chat_aurora', '/perfil', '/redacao'];
    const isProtectedPath = protectedPaths.some(prefix => request.nextUrl.pathname.startsWith(prefix));

    if (isProtectedPath && !user) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    
    if (user !== null && request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/cadastro')) {
        return NextResponse.redirect(new URL('/modulos/trilha-demo', request.url));
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ['/areaTreinamento/:path*', 
              '/chat_aurora/:path*', 
              '/modulos/:path*', 
              '/perfil/:path*', 
              '/redacao/:path*',
              '/login',
              '/cadastro'],
};
