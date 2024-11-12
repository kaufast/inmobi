// src/middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/es-ES`, request.url)); // Redirect to default locale
  }
  return NextResponse.next(); // Continue to the requested route
}
