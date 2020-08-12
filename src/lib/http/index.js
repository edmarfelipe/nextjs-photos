const BASE_URL = 'https://breaking-bad-quotes.herokuapp.com/v1'

export async function getQuotes() {
  const resp = await fetch(`${BASE_URL}/quotes`)
  const data = await resp.json()

  return data[0] || {}
}
