// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { list } from "@vercel/blob"
export default async function handler(req, res) {
  try{
    const { blobs } = await list()
    res.status(200).json({ blobs })
  } catch(err){ 
    console.log(err)
  }
}
