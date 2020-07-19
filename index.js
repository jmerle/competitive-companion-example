const app = require('express')();
const bodyParser = require('body-parser');

const port = 10043;

app.use(bodyParser.json());

app.post('/', (req, res) => {
  const data = req.body;

  console.log(`Problem name: ${data.name}`);
  console.log(`Problem group: ${data.group}`);
  console.log('Full body:');
  console.log(JSON.stringify(data, null, 4));

  res.sendStatus(200);
});

app.listen(port, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Listening on port ${port}`);
});
