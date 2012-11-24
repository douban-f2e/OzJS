---
layout: intro
title: URLKit
---

# URLKit

> * A lightweight implementation of routing and URL manager
> * Automatic switch between html5 History API and IE's hashbang

## AMD and OzJS

* URLKit can either be viewed as an independent library, or as a part of [OzJS mirco-framework](http://ozjs.org/#framework).
* It's wrapped as an [AMD (Asynchronous Module Definition)](https://github.com/amdjs/amdjs-api/wiki/AMD) module. You should use it with [oz.js](http://ozjs.org/#start) (or require.js or [similar](http://wiki.commonjs.org/wiki/Implementations) for handling dependencies). 
* If you want to make it available for both other AMD code and traditional code based on global namespace. OzJS provides [a mini define/require implementation](http://ozjs.org/examples/adapter/) to transform AMD module into traditional [module pattern](http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth).
* See [http://ozjs.org](http://ozjs.org) for details.

## Dependencies

* [mo/lang](https://github.com/dexteryy/mo)
* [mo/browsers](https://github.com/dexteryy/mo)

## Examples

* [demo](http://ozjs.org/URLKit/examples/)

## Get the code

* [View/download on Github](https://github.com/dexteryy/URLKit/blob/master/urlkit.js)
* Add/update to your project as new dependency:
    * via [istatic](https://github.com/mockee/istatic.git)
    * via [volo](https://github.com/volojs/volo)

## API and usage

```javascript
var URLKit = require('mod/urlkit');
```

* `URLKit.parse(url)` -- 
* `URLKit.param(urlObj, options)` -- 
* `URLKit.SUPPORT_PUSHSTATE` -- 

```javascript
var url = URLKit({
    baseUrl: '', // optional, '/' for default
    win: window,  // optional
    autotidy: true // optional, true for default
});
```

* `url.listen()` -- 
* `url.stop()` -- 
* `url.route(rule, handler)` -- 
* `url.nav(urlConfig, {
    /* replace: true,
    route: false */
})` -- 
* `url.load(url, options)` -- 
* `url.set(options)` -- 
* `url.checkRules(url, rules)` -- 
* `url.getBaseUrl()` -- 

Under construction...

## More References

See [OzJS References](http://ozjs.org/#ref)

## Release History

See [OzJS Release History](http://ozjs.org/#release)

## License

Copyright (c) 2010 - 2013 dexteryy  
Licensed under the MIT license.


