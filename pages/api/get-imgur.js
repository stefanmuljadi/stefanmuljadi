

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  try{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Client-ID ${process.env.CLIENT_ID}`);
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    const result = await fetch("https://api.imgur.com/3/album/bXC38fz/images", requestOptions)
    .then((response) => response.json())
    res.status(200).send(result)
  } catch(err){ 
    console.log(err)
  }
}
