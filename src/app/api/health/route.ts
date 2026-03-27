import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Simple health check
    return NextResponse.json(
      { 
        status: 'ok',
        timestamp: new Date().toISOString(),
        service: 'fiscalepro-landing'
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { 
        status: 'error',
        timestamp: new Date().toISOString(),
        service: 'fiscalepro-landing'
      },
      { status: 500 }
    )
  }
}