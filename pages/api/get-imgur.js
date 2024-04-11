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
    
    const imageRes = await fetch("https://api.imgur.com/3/album/8xweB9v/images", requestOptions)
      .then(response => {response.text()})
    res.status(200).json({ imageRes })
  } catch(err){ 
    console.log(err)
  }
}
