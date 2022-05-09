import express from 'express';


const app = express();

const port = 3000

app.get('/auth', (req, res) => {
  return res.send('An authentication is required. Resources denied!')
})

app.listen(port, () => {console.log(`Server is running at http://localhost:${port}`)})