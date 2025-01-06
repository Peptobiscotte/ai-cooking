import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const id = searchParams.get('id')

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      if (!response.ok) {
        return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
          status: response.status,
        });
      }
      
      const data = await response.json()
      return Response.json(data)
  } catch (e) {
      console.error(e)
    }
}