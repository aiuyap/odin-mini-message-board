const express = require('express');
const indexRouter = require('./routes/indexRoute');
const path = require('node:path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
