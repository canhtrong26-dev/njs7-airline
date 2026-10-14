import { NextResponse } from 'next/server';
import { csrfMiddleware } from '../../../middleware/csrf';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const window = new JSDOM('').window;
const purify = DOMPurify(window);

export async function POST(req) {
  const csrfResponse = await csrfMiddleware(req);
  if (csrfResponse) return csrfResponse;

  const { departure, arrival, date, class: travelClass, passengers } = await req.json();

  const cleanDeparture = purify.sanitize(departure);
  const cleanArrival = purify.sanitize(arrival);
  const cleanDate = purify.sanitize(date);
  const cleanClass = purify.sanitize(travelClass);
  const cleanPassengers = purify.sanitize(passengers);

  console.log('🔍 Searching flights:', { cleanDeparture, cleanArrival, cleanDate, cleanClass, cleanPassengers });

  return NextResponse.json({ 
    message: `Đang tìm chuyến bay từ ${cleanDeparture} đến ${cleanArrival}!` 
  });
}

export async function GET(req) {
  return await csrfMiddleware(req);
}