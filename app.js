const express = require('express');
const indexRouter = require('./routes/indexRoute');
const app = express();

app.use('/', indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
