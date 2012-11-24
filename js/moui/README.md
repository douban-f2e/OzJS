
# Moui

* A collection of OzJS UI behavior modules that form a library called "Moui"

## AMD and OzJS

* Moui can either be viewed as an independent library, or as a part of [OzJS mirco-framework](http://ozjs.org/#framework).
* It's wrapped as a number of mutually independent [AMD (Asynchronous Module Definition)](https://github.com/amdjs/amdjs-api/wiki/AMD) modules. You should use them with [oz.js](http://ozjs.org/#start) (or require.js or [similar](http://wiki.commonjs.org/wiki/Implementations) for handling dependencies). 
* If you want to make them available for both other AMD code and traditional code based on global namespace. OzJS provides [a mini define/require implementation](http://ozjs.org/examples/adapter/) to transform AMD module into traditional [module pattern](http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth).
* See [http://ozjs.org](http://ozjs.org) for details.

## Dependencies

* jquery or [DollarJS](https://github.com/dexteryy/DollarJS)
* [mo](https://github.com/dexteryy/mo)

## Modules Overview

* [moui/stick](https://github.com/dexteryy/moui/blob/master/stick.js): 
    * Stick a DOM element to anther from any clock position 
* `mod/drag`: 
    * Standalone drag & drop library provides HTML5 shim 
    * Refactoring...
* [moui/danvas](https://github.com/dexteryy/moui/blob/master/danvas.js): 
    * Implement canvas API using DOM elements
* [moui/mention](https://github.com/dexteryy/moui/blob/master/mention.js): 
* [moui/scrollbar](https://github.com/dexteryy/moui/blob/master/scrollbar.js): 
* [moui/mapviewer](https://github.com/dexteryy/moui/blob/master/mapviewer.js): 
* [moui/dialog](https://github.com/dexteryy/moui/blob/master/dialog.js): 

## Examples

Under construction...

## API and usage

Under construction...

## More References

See [OzJS References](http://ozjs.org/#ref)

## Release History

See [OzJS Release History](http://ozjs.org/#release)
