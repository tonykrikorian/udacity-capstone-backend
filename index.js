const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const tranlate = require('./routes/translate');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/translate', tranlate);

const port = 80;
app.listen(port, () => {
  // console.log(`Listen on port ${port}`);
});
