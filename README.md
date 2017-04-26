[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url] [![Greenkeeper badge][greenkeeper-image]][greenkeeper-url] [![license](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)
# static-prerender-server
> Starts a static server with prerender.

## Global usage

```sh
$ npm install -g static-prerender-server
$ static-prerender-server
```

## Project usage

```sh
$ npm install --save static-prerender-server
```

```js
const server = require('static-prerender-server');
const path = require('path');

server({
  port: 3000,
  prerenderPort: 3002,
  path: path.join(__dirname, 'public'),
  fallbackFile: 'index.html',
  callback: () => console.log('Server online!')
})

// or just run server() with no options
```
## License

MIT © [Bart Langelaan](http://bart.ninja)


[npm-image]: https://badge.fury.io/js/static-prerender-server.svg
[npm-url]: https://npmjs.org/package/static-prerender-server
[travis-image]: https://travis-ci.org/bartlangelaan/static-prerender-server.svg?branch=master
[travis-url]: https://travis-ci.org/bartlangelaan/static-prerender-server
[daviddm-image]: https://david-dm.org/bartlangelaan/static-prerender-server.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/bartlangelaan/static-prerender-server
[coveralls-image]: https://coveralls.io/repos/bartlangelaan/static-prerender-server/badge.svg
[coveralls-url]: https://coveralls.io/r/bartlangelaan/static-prerender-server
[greenkeeper-image]: https://badges.greenkeeper.io/bartlangelaan/static-prerender-server.svg
[greenkeeper-url]: https://greenkeeper.io/
[license-image]: https://img.shields.io/github/license/mashape/apistatus.svg
