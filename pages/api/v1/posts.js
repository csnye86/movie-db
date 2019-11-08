import axios from 'axios'


export default async (req, res) => {
  if(req.method === 'GET') {
    const posts = await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.data)
    return res.json(posts.splice(0, 10))

  }
  if(req.method === 'POST') {
    const postData = JSON.parse(req.body)
    console.log('postData', postData)
    return res.json({
      status: 'Saving Post to DB',
      ...postData
    })
  }
}