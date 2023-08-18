export async function getUserbyId() {
    const endpoints = process.env.ENDPOINT
    const id = process.env.USER_ID
    const data = await fetch(`${endpoints}/users/id`)

    const user = await data.json()
  
    if (!data.ok) {
      throw new Error('Failed to fetch data')
    }
//   console.log("This is data: "+user[1].name);
  
  
    return user;
  
  }
