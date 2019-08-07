
### `Intro`
Util to find the Content-Type for a extension

#### `Install`
``` bash
npm install --save git+https://github.com/anzerr/mime.util.git
npm install --save @anzerr/mime.util
```

### `Example`
``` javascript
const mime = require('mime.util');
mime.lookup('json') // application/json
```