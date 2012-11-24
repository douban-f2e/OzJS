---
layout: intro
title: ChoreoJS
---

# ChoreoJS

> * An animation library which uses "stage" and "actor" as metaphors
> * Automatic switch between CSS transitions and JS tweening
> * Provide a flexible way to write asynchronous sequence of actions
> * Support CSS transform value

## AMD and OzJS

* ChoreoJS can either be viewed as an independent library, or as a part of [OzJS mirco-framework](http://ozjs.org/#framework).
* It's wrapped as an [AMD (Asynchronous Module Definition)](https://github.com/amdjs/amdjs-api/wiki/AMD) module. You should use it with [oz.js](http://ozjs.org/#start) (or require.js or [similar](http://wiki.commonjs.org/wiki/Implementations) for handling dependencies). 
* If you want to make it available for both other AMD code and traditional code based on global namespace. OzJS provides [a mini define/require implementation](http://ozjs.org/examples/adapter/) to transform AMD module into traditional [module pattern](http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth).
* See [http://ozjs.org](http://ozjs.org) for details.

## Dependencies

* [mo/lang](https://github.com/dexteryy/mo)
* [mo/mainloop](https://github.com/dexteryy/mo)
* [EventMaster](https://github.com/dexteryy/EventMaster)
* [host](https://github.com/dexteryy/OzJS) (oz.js built-in module, alternate implementation: `define("host", [], function(){ return window; });` )

## Examples

* [demo](http://ozjs.org/ChoreoJS/examples/)

## Get the code

* [View/download on Github](https://github.com/dexteryy/ChoreoJS/blob/master/choreo.js)
* Add/update to your project as new dependency:
    * via [istatic](https://github.com/mockee/istatic.git)
    * via [volo](https://github.com/volojs/volo)

## API and usage

```javascript
var choreo = require('choreo');
```

* `choreo.config(opt)` -- 
* `choreo.transform(elm, prop, value)` -- 
* `choreo.Stage(name)` -- 
* `choreo.Actor(opt|actors, stage)` -- 

```javascript
var stage = choreo('stageName[optional]'); // Singleton with stageName
```

* `stage.isPlaying()` -- 
* `stage.isCompleted()` -- 
* `stage.play()` -- 
* `stage.pause()` -- 
* `stage.complete()` -- 
* `stage.cancel()` -- 
* `stage.clear()` -- 
* `stage.actor(opt)` -- 
* `stage.group(actor, actor, ...)` -- 
* `stage.follow()` -- 

```javascript
    var actor1 = stage.actor(elment, prop, duration, easeing, delay);
    var actor2 = stage.actor(option, option);
    var actorGroup = stage.group(actor1, actor2);
```

* `actor.enter(stage)` -- 
* `actor.exit()` -- 
* `actor.fork()` -- 
* `actor.setto(value)` -- 
* `actor.extendto(value)` -- 
* `actor.reverse()` -- 
* `actor.follow()` -- 

```javascript
    var promise = stage.follow(); // or actor1.follow(), actorGroup.follow()
```

* `promise.then()` -- 
* `promise.done()` -- 
* `promise.fail()` -- 
* `promise.bind()` -- 
* ... -- see [EventMaster](https://github.com/dexteryy/EventMaster)

Under construction...

## More References

See [OzJS References](http://ozjs.org/#ref)

## Release History

See [OzJS Release History](http://ozjs.org/#release)

## License

Copyright (c) 2010 - 2013 dexteryy  
Licensed under the MIT license.


