const express = require('express');
const cors = require('cors');
const dummydata = require('./dummydata');

const app = express();

app.use(express.json({ strict: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.send(dummydata[0].data.movies);
});

let PORT = 5000;
let IP = 'localhost';
app.listen(PORT, IP, () => console.log(`PORT ${PORT} IP ${IP} OMG`));
