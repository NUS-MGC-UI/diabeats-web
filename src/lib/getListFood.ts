export async function getListFood() {
    'use server'
    const endpoints = process.env.ENDPOINT
    const data = await fetch(`${endpoints}/foods`)

    const food = await data.json()
  
    if (!data.ok) {
      throw new Error('Failed to fetch data')
    }
//   console.log("This is data: "+food[1].name);
  
  
    return food;
  
  }