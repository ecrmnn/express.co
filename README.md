# express.co
> Use generators with Express 4.x.x

### Installation
```bash
npm install express.co
```

### Tests
Currently in development.

### Usage
Like you would use ``express`` as normal
```javascript
const express = require('express.co');
const app = express();

app.get('/', function* (req, res) {
  res.send('Hello World!');
});

app.listen(3000, () => console.log('Application running on localhost:3000'));
```

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)