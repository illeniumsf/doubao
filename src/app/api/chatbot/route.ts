import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { message } = await req.json();
  // Simulate a bot reply (echo)
  return NextResponse.json({ reply: `Bot: You said, "${message}"` });
} 