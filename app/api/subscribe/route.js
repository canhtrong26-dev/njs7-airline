import { NextResponse } from 'next/server';
import { csrfMiddleware } from '../../../middleware/csrf';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const window = new JSDOM('').window;
const purify = DOMPurify(window);

export async function POST(req) {
  const csrfResponse = await csrfMiddleware(req);
  if (csrfResponse) return csrfResponse;

  const { email, city, agree } = await req.json();

  
  const cleanEmail = purify.sanitize(email);
  const cleanCity = purify.sanitize(city);

  console.log('📧 New subscriber:', { cleanEmail, cleanCity, agree });

  return NextResponse.json({ 
    message: `Đã đăng ký thành công với email: ${cleanEmail}!` 
  });
}

export async function GET(req) {
  return await csrfMiddleware(req);
}