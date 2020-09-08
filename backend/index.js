const express = require('express');
const app = express();
const port = 5000;
const response = 'Hello there!';
app.get('/api', (req, res) => res.send({ response }));
app.listen(port, () => console.log(`Listening on port ${port}`));