const express = require('express');
const app = express();
const port = 3000;

//Using the public folder at the root
app.use(express.static('public'));

//Using the images folder
app.use("/images", express.static("images"));

//get
app.get('/', (req, res) => {
res.send('Hello World from Express!')
})

//post
app.post('/', (req, res) => {
res.send('Got a POST request')
})

//put
app.put('/user', (req, res) => {
res.send('Got a PUT request at /user')
})

//delete
app.delete('/user', (req, res) => {
res.send('Got a DELETE request at /user')
})


app.listen(port, () => {
console.log(`Express app listening on port ${port}`)
})
