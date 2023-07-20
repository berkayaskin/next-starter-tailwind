export const GET = () => {
  const data = { name: 'John Doe' }
  const response = new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  })
  return Promise.resolve(response)
}
