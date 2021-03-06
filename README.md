# @toolio/config.log

**Plugin - Default configs for [@toolio/log](https://github.com/tooliojs/log)**

[![CircleCI](https://circleci.com/gh/tooliojs/config.log.svg?style=shield)](https://circleci.com/gh/tooliojs/config.log)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/tooliojs/config.log/blob/master/LICENSE.md)

*Note: Plugins only work in [@toolio/config](https://github.com/tooliojs/config) files.*

## Install
```
npm install @toolio/config.log
```

## Usage
```js
/* .toolio/config.js */

module.exports = {
    config: {
        mode: 'relaxed',
        plugins: ['@toolio/config.log']
    }
}
```
```js
const log = require('@toolio/log')

log.error('this error message will get logged only to the console')
log.test('this test message won\'t actually log')
```
**output:**

![@toolio/log example output.](https://raw.githubusercontent.com/arakilian0/images/master/toolio-log-usage-v2.png "@toolio/log example output.")

## Documentation
coming soon...

## License

MIT License

Copyright (c) 2020 Michael Arakilian

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.